# Technical Documentation - DashForge

Comprehensive technical guide for developers working with the DashForge dashboard framework. This document covers architecture details, implementation patterns, and developer workflows.

## Table of Contents

1. [Architecture Deep Dive](#architecture-deep-dive)
2. [Component System](#component-system)
3. [State Management Details](#state-management-details)
4. [Styling Architecture](#styling-architecture)
5. [Data Flow Patterns](#data-flow-patterns)
6. [Performance Optimization](#performance-optimization)
7. [Testing Strategies](#testing-strategies)
8. [Common Patterns](#common-patterns)
9. [Troubleshooting](#troubleshooting)
10. [Advanced Topics](#advanced-topics)

## Architecture Deep Dive

### Application Initialization Flow

```
main.tsx
├─ React.StrictMode (Development warnings)
├─ Provider (Redux store)
│  └─ RouterProvider (React Router)
│     └─ RootLayout (Shell component)
│        ├─ Navbar (Navigation header)
│        ├─ Sidebar (Navigation menu)
│        ├─ Outlet (Route content)
│        └─ Footer (Footer)
```

### Entry Point Analysis

**File**: `src/main.tsx`

```typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { router } from "./app/router";
import "./lib/echarts/maps";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
```

**Initialization Order**:

1. React root created
2. Redux store provided to app tree
3. Router initialized
4. ECharts maps loaded
5. StrictMode enables development checks

### Root Layout Architecture

**File**: `src/app/routes/root.tsx`

The root layout is the primary shell component that persists across route changes:

```typescript
export const RootLayout = () => {
  const theme = useAppSelector((state) => state.themeToggle.value);
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isOpen);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  return (
    <main className="...">
      <Navbar />
      <Sidebar />
      <div className={`pt-DF-sb-top ...`}>
        <div className="...">
          <Outlet />
        </div>
      </div>
      <Footer />
    </main>
  );
};
```

**Key Patterns**:

- Redux selectors for theme and sidebar state
- `useEffect` for theme DOM manipulation
- `Outlet` for nested route rendering
- Responsive spacing based on sidebar state

### Route Configuration

**File**: `src/app/router.tsx`

```typescript
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <DashboardRoute /> },
      { path: "analytics", element: <AnalyticsRoute /> },
      // ... other routes
    ],
  },
]);
```

**Routing Patterns**:

- Single root route with nested children
- Shared layout persisted across navigation
- Index route for default page
- Feature routes at top level (no deep nesting)

## Component System

### Component Hierarchy

```
RootLayout
├── Navbar
│   ├── SidebarToggle
│   ├── SearchInput
│   └── ThemeToggle
├── Sidebar
│   └── SidebarItemWithSubmenu (mapped over items)
├── [RouteContent]
│   └── Feature Component
│       ├── Sections
│       │   ├── Card(s)
│       │   ├── Chart(s)
│       │   ├── MapChart
│       │   └── [Custom Components]
│       └── Data Display
└── Footer
```

### Atomic Component Design

DashForge follows an atomic design pattern with several tiers:

#### Atoms (Basic UI Elements)

- `Button.tsx` - Basic button component
- `Icon` components - SVG icons
- Form inputs
- Text/Typography

#### Molecules (Simple Combinations)

- `Card.tsx` - Card container with status indicators
- `SearchInput.tsx` - Search field with icon
- `SidebarToggle.tsx` - Toggle button + functionality

#### Organisms (Complex Combinations)

- `Navbar.tsx` - Full navigation bar
- `Sidebar.tsx` - Full sidebar navigation
- `Chart.tsx` - Chart wrapper with options
- `MapChart.tsx` - Geographic visualization

#### Templates (Layout Structures)

- `RootLayout` - Main application shell
- Feature layouts in sections

### Reusable Component Patterns

#### 1. Generic Chart Component

**File**: `src/components/Chart.tsx`

```typescript
type ChartProps = {
  type: 'line' | 'area' | 'bar' | 'donut' | 'radialBar' | 'pie' | 'radar' | 'candlestick';
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  options?: ApexOptions;
  height?: number;
};

export const Chart = React.memo(
  ({ type, series, options, height = 300 }: ChartProps) => {
    const mergedOptions: ApexOptions = {
      chart: { type, height, toolbar: { show: false } },
      stroke: { curve: 'smooth' },
      dataLabels: { enabled: false },
      grid: { borderColor: 'rgba(255,255,255,0.05)' },
      tooltip: { theme: 'dark' },
      ...options,
    };

    return (
      <ApexChart
        type={type}
        series={series}
        options={mergedOptions}
        height={height}
      />
    );
  },
);
```

**Usage**:

```typescript
<Chart
  type="area"
  series={revenueData}
  options={customOptions}
  height={350}
/>
```

**Optimization**:

- Memoized to prevent unnecessary re-renders
- Configurable chart types and options
- Default dark theme applied

#### 2. Card Component with Status

**File**: `src/components/Card.tsx`

```typescript
type CardProps = {
  title: string;
  titleNumb?: number;
  counterNumb?: number;
  signNumb?: string;
  statusNumb?: StatusNumb;
  link?: string;
  icon?: IconName;
};

export const Card = ({ title, titleNumb, counterNumb, ... }: CardProps) => {
  // Type-safe styling based on status
  const statusClass = statusNumb ? STATUS_COLOR[statusNumb] : "";
  const statusBgClass = statusNumb ? STATUS_BG[statusNumb] : "";

  return (
    <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark rounded-md">
      {/* Card content */}
    </div>
  );
};
```

**Status Styling Mapping**:

```typescript
const STATUS_COLOR: Record<StatusNumb, string> = {
  green: "text-DF-green",
  red: "text-DF-danger",
  gray: "text-gray-400",
};
```

#### 3. Navigation Components

**Sidebar Item with Submenu**:

```typescript
export const SidebarItemWithSubmenu = ({ id, icon, title, items }) => {
  const dispatch = useAppDispatch();
  const activeAccordionId = useAppSelector(
    state => state.sidebar.activeAccordionId
  );
  const isActive = activeAccordionId === id;

  return (
    <div>
      <button onClick={() => dispatch(setActiveAccordion(isActive ? null : id))}>
        {icon}
        {title}
      </button>
      {isActive && (
        <ul>
          {items.map(item => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
```

### Component Organization Rules

1. **Co-location**: Keep component files close to where they're used

   ```
   features/dashboard/
   ├── Dashboard.tsx
   ├── components/
   │   ├── RevenueChart.tsx
   │   └── StatsCard.tsx
   └── sections/
       └── Revenue.tsx
   ```

2. **Shared Components**: Place in `src/components/` if used by 2+ features

3. **Feature Components**: Keep feature-specific components in feature folder

4. **Type Files**: Include types in component file or dedicated `types.ts`

## State Management Details

### Redux Store Setup

**File**: `src/store/store.ts`

```typescript
import { configureStore } from "@reduxjs/toolkit";
import themeToggleReducer from "./themeToggleSlice";
import sidebarReducer from "./sidebarSlice";
import teamReducer from "../features/team/teamSlice";

export const store = configureStore({
  reducer: {
    themeToggle: themeToggleReducer,
    sidebar: sidebarReducer,
    team: teamReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

**Store Configuration**:

- Uses `configureStore` from Redux Toolkit (automatic middleware setup)
- Combines multiple feature slices
- Exports types for strong typing

### Slice Anatomy

**Example**: `src/store/themeToggleSlice.ts`

```typescript
import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const themeToggleSlice = createSlice({
  name: "themeToggle",
  initialState: { value: getInitialTheme() },
  reducers: {
    toggle: (state) => {
      state.value = state.value === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.value);
    },
  },
});

export const { toggle } = themeToggleSlice.actions;
export default themeToggleSlice.reducer;
```

**Slice Features**:

- `createSlice` automatically generates actions
- Initial state computation (system preference detection)
- Side effects in reducers (localStorage update)
- Immer-based immutable updates

### Typed Hooks Pattern

**File**: `src/hooks.ts`

```typescript
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

**Usage Benefits**:

- Type safety without typing every hook call
- Auto-completion for state shape
- Catches typos at compile time

### Selector Patterns

**Basic Selector**:

```typescript
const theme = useAppSelector((state) => state.themeToggle.value);
```

**Computed Selector**:

```typescript
const isSidebarOpen = useAppSelector((state) => state.sidebar.isOpen);
const activeMenu = useAppSelector((state) => state.sidebar.activeAccordionId);
```

**Recommended Approach (Reselect)**:

```typescript
// Create reusable selectors
export const selectTheme = (state: RootState) => state.themeToggle.value;
export const selectIsSidebarOpen = (state: RootState) => state.sidebar.isOpen;

// Usage
const theme = useAppSelector(selectTheme);
```

## Styling Architecture

### Tailwind CSS Setup

**File**: `src/index.css`

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  /* Custom theme values */
  --color-DF-surface: #fff;
  --color-DF-surface-dark: #121215;
  /* ... more theme values */
}
```

### Design System Variables

The application implements a comprehensive design system through Tailwind theme variables:

**Color System**:

```css
/* Backgrounds */
--color-DF-surface: #fff; /* Light theme surface */
--color-DF-surface-dark: #121215; /* Dark theme surface */
--color-DF-bg-light: #f3f3f9; /* Light backgrounds */
--color-DF-bg-dark: #212529; /* Dark backgrounds */

/* Semantic Colors */
--color-DF-green: #0ab39c; /* Success/positive */
--color-DF-blue: #299cdb; /* Primary/info */
--color-DF-danger: #f06548; /* Error/negative */
```

**Spacing System**:

```css
--width-DF-sb-left: 70px; /* Collapsed sidebar */
--spacing-DF-nav-side-isopen: 250px; /* Expanded sidebar */
--height-DF-nav-top: 70px; /* Navbar height */
```

### Dark Mode Implementation

**Theme Toggle Slice**:

```typescript
// 1. State updated
dispatch(toggle()); // 'light' -> 'dark'

// 2. Root effect runs
useEffect(() => {
  const html = document.documentElement;
  if (theme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}, [theme]);

// 3. Tailwind applies dark: variants
<div className="bg-white dark:bg-black">
```

### Class Naming Conventions

**DashForge Custom Classes**:

- `DF-*` prefix for custom design system values
- Example: `bg-DF-surface`, `text-DF-heading`
- Benefits: Clear namespace, easy to identify custom values

**Responsive Breakpoints**:

```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

**Common Responsive Patterns**:

```typescript
// Hide on mobile, show on desktop
className = "hidden md:block";

// Adjust layout
className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4";

// Spacing adjustments
className = "p-2 md:p-4 lg:p-6";
```

## Data Flow Patterns

### Redux Data Flow

```
┌─────────────────────────────────────────┐
│   Component (e.g., ThemeToggle)        │
└────────────┬──────────────────────────┘
             │
             ▼ Click event
        dispatch(toggle())
             │
             ▼
┌─────────────────────────────────────────┐
│   Action: { type: toggle }              │
└────────────┬──────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│   Reducer: themeToggleSlice             │
│   (Update state)                        │
└────────────┬──────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│   Store: { theme: 'dark' }              │
└────────────┬──────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│   Selector: useAppSelector(s => s.theme)
│   (Connected component re-renders)      │
└─────────────────────────────────────────┘
```

### Async Operations (Current & Future)

**Current Approach** (Mock Data):

```typescript
// features/analytics/data/analyticsStats.ts
export const ANALYTICS_STATS = [
  { metric: "Page Views", value: 123456 },
  // ... mock data
];

// Usage
const data = ANALYTICS_STATS;
```

**Future Approach** (API Integration):

```typescript
// With RTK Query (recommended)
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const analyticsApi = createApi({
  reducerPath: "analyticsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getAnalyticsStats: builder.query({
      query: () => "/analytics/stats",
      pollingInterval: 60000, // Real-time updates every 60s
    }),
  }),
});

// In store.ts
configureStore({
  reducer: {
    [analyticsApi.reducerPath]: analyticsApi.reducer,
    // ... other reducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(analyticsApi.middleware),
});

// In component
const { data, isLoading } = analyticsApi.useGetAnalyticsStatsQuery();
```

## Performance Optimization

### Component Memoization

**Chart Component Example**:

```typescript
export const Chart = React.memo(
  ({ type, series, options, height = 300 }: ChartProps) => {
    // Component implementation
  },
  (prevProps, nextProps) => {
    // Optional custom comparison
    return (
      prevProps.type === nextProps.type &&
      JSON.stringify(prevProps.series) === JSON.stringify(nextProps.series)
    );
  },
);
```

**When to Use `React.memo`**:

- ✅ Pure components (same props = same output)
- ✅ Expensive render operations
- ✅ Frequently re-rendering parent
- ❌ Components with primitives/closures that change frequently
- ❌ Components with complex prop comparison

### Lazy Loading Routes

**Recommended Approach** (Not yet implemented):

```typescript
import { lazy, Suspense } from 'react';

const Analytics = lazy(() => import('../features/analytics/Analitics'));
const Dashboard = lazy(() => import('../features/dashboard/Dashboard'));

// In router
{
  path: "analytics",
  element: (
    <Suspense fallback={<LoadingSpinner />}>
      <Analytics />
    </Suspense>
  )
}
```

### Bundle Analysis

**Add to track bundle size**:

```bash
npm install -D vite-plugin-visualizer
```

**vite.config.ts**:

```typescript
import { visualizer } from "vite-plugin-visualizer";

export default defineConfig({
  plugins: [react(), tailwindcss(), visualizer()],
});
```

Run `npm run build` to generate bundle analysis.

### Performance Monitoring

**Recommended Approach**:

```typescript
// In main.tsx
if ("web-vital" in window) {
  import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  });
}
```

**Key Metrics**:

- CLS (Cumulative Layout Shift) < 0.1
- FID (First Input Delay) < 100ms
- LCP (Largest Contentful Paint) < 2.5s
- FCP (First Contentful Paint) < 1.8s
- TTFB (Time to First Byte) < 600ms

## Testing Strategies

### Jest Configuration

**File**: `jest.config.ts`

```typescript
const config: Config = {
  rootDir: "./",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/mocks/fileMock.js",
  },
};
```

### Testing Utilities

**File**: `src/test-utils.tsx`

```typescript
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store/store';

const customRender = (ui: React.ReactElement) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </Provider>
  );
};

export * from '@testing-library/react';
export { customRender as render };
```

### Component Testing Example

```typescript
// src/components/Card.test.tsx
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders card title', () => {
    render(
      <Card
        title="Test Card"
        counterNumb={100}
        statusNumb="green"
      />
    );
    expect(screen.getByText('TEST CARD')).toBeInTheDocument();
  });

  it('displays counter number', () => {
    render(
      <Card
        title="Test"
        counterNumb={500}
      />
    );
    expect(screen.getByText('$500')).toBeInTheDocument();
  });

  it('shows correct status styling', () => {
    const { container } = render(
      <Card
        title="Test"
        statusNumb="green"
        titleNumb={12.5}
      />
    );
    expect(container.querySelector('.text-DF-green')).toBeInTheDocument();
  });
});
```

### Redux Testing

```typescript
// Example: Testing a slice
import { toggle } from "../store/themeToggleSlice";
import reducer, { themeToggleSlice } from "../store/themeToggleSlice";

describe("themeToggleSlice", () => {
  it("toggles theme from light to dark", () => {
    const initialState = { value: "light" as const };
    const state = reducer(initialState, toggle());
    expect(state.value).toBe("dark");
  });

  it("persists theme to localStorage", () => {
    const spy = jest.spyOn(Storage.prototype, "setItem");
    reducer({ value: "light" }, toggle());
    expect(spy).toHaveBeenCalledWith("theme", "dark");
  });
});
```

### Integration Testing

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ThemeToggle } from './ThemeToggle';
import { RootLayout } from '../app/routes/root';

describe('Theme Integration', () => {
  it('toggles theme and updates DOM', () => {
    render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
```

## Common Patterns

### Form Handling Pattern

**Local State Approach** (Simpler for isolated forms):

```typescript
import { useState } from 'react';

export const SearchForm = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
};
```

**Redux Approach** (For global form state):

```typescript
// teamSlice.ts
reducers: {
  setSearchQuery(state, action: PayloadAction<string>) {
    state.searchQuery = action.payload;
  },
}

// Component
const dispatch = useAppDispatch();
const searchQuery = useAppSelector(state => state.team.searchQuery);

const handleChange = (value: string) => {
  dispatch(setSearchQuery(value));
};
```

### Navigation Patterns

**Link Navigation**:

```typescript
import { Link } from 'react-router-dom';

<Link to="/analytics" className="...">
  Analytics
</Link>
```

**Programmatic Navigation**:

```typescript
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const handleNavigate = () => {
  navigate("/dashboard");
};
```

### Conditional Rendering

**Simple Conditional**:

```typescript
{isOpen && <Sidebar />}
{!loading && <Content />}
```

**Ternary Operator**:

```typescript
{theme === 'dark' ? <DarkIcon /> : <LightIcon />}
```

**Early Return**:

```typescript
if (isLoading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} />;
return <Content />;
```

### Custom Hook Pattern

```typescript
// Hook
function useTheme() {
  const theme = useAppSelector(state => state.themeToggle.value);
  const dispatch = useAppDispatch();

  const toggleTheme = () => dispatch(toggle());

  return { theme, toggleTheme };
}

// Usage
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Current: {theme}
    </button>
  );
};
```

## Troubleshooting

### Common Issues & Solutions

#### Issue: Theme Changes Not Reflecting

**Problem**: Dark mode toggle not updating styles

**Solutions**:

1. Check Redux DevTools: Verify `themeToggle.value` is changing
2. Check DOM: Verify `dark` class on `<html>` element
3. Check CSS: Verify Tailwind dark: variants are compiled
4. Clear cache: `npm run build && npm run preview`

#### Issue: State Not Persisting

**Problem**: Redux state resets on page refresh

**Solutions**:

1. Use `redux-persist` package for automatic persistence
2. Manually save to localStorage in reducers
3. Load initial state from localStorage

**Implementation**:

```typescript
// In slice
reducers: {
  toggle: (state) => {
    state.value = state.value === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', state.value); // Persist
  },
}
```

#### Issue: Performance Degradation

**Problem**: App slowing down with many dashboards

**Solutions**:

1. Profile with DevTools: React DevTools Profiler
2. Implement code splitting/lazy loading
3. Memoize expensive components
4. Review Redux selectors for unnecessary re-renders
5. Use React DevTools "Highlight when component renders"

#### Issue: Type Errors in Redux

**Problem**: `useAppSelector` not recognizing state shape

**Solutions**:

1. Verify types exported from `store.ts`
2. Check slice reducer names match store configuration
3. Restart TS server in editor
4. Check import paths are correct

**Debug**:

```typescript
import { RootState } from "./store/store";

type State = RootState; // Hover to see full type
```

#### Issue: Build Size Too Large

**Problem**: Production bundle >500KB

**Solutions**:

1. Run `npm run build` and check output
2. Analyze with `vite-plugin-visualizer`
3. Identify large dependencies:
   - ApexCharts: 200KB (hard to reduce)
   - ECharts: 800KB (use theme-specific build if needed)
4. Implement lazy loading for routes
5. Consider using lighter alternatives

#### Issue: Hot Module Replacement (HMR) Not Working

**Problem**: Changes not reflecting during development

**Solutions**:

1. Check dev server is running: `npm run dev`
2. Check browser console for errors
3. Verify WebSocket connection to dev server
4. Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
5. Restart dev server

### Debug Mode

**Enable Redux DevTools**:

```typescript
// In main.tsx or after store creation
if (import.meta.env.DEV) {
  console.log("Initial State:", store.getState());
}
```

**Debug Component Rendering**:

```typescript
export const Component = () => {
  console.log('Component rendered at', new Date().toLocaleTimeString());
  return <div>...</div>;
};
```

**Performance Profiling**:

```typescript
import { Profiler } from 'react';

<Profiler id="dashboard" onRender={(id, phase, duration) => {
  console.log(`${id} (${phase}) took ${duration}ms`);
}}>
  <Dashboard />
</Profiler>
```

## Advanced Topics

### Adding New Dashboard Module

**Step 1**: Create feature folder

```
src/features/newdash/
├── NewDash.tsx
├── components/
├── sections/
├── data/
└── types/
```

**Step 2**: Create route component

```typescript
// src/app/routes/newdash.tsx
import { NewDash } from "../../features/newdash/NewDash";

export const NewDashRoute = () => {
  return <NewDash />;
};
```

**Step 3**: Add to router

```typescript
// src/app/router.tsx
import { NewDashRoute } from './routes/newdash';

{ path: "newdash", element: <NewDashRoute /> }
```

**Step 4**: Add to sidebar config

```typescript
// src/config/sidebar.config.ts
{
  label: "New Dashboard",
  to: "/newdash"
}
```

### Adding Redux Slice

**Step 1**: Create slice file

```typescript
// src/features/myfeature/mySlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type MyState = {
  data: string[];
};

const initialState: MyState = {
  data: [],
};

const mySlice = createSlice({
  name: "myfeature",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<string>) => {
      state.data.push(action.payload);
    },
  },
});

export const { addData } = mySlice.actions;
export default mySlice.reducer;
```

**Step 2**: Add to store

```typescript
// src/store/store.ts
import myReducer from "../features/myfeature/mySlice";

export const store = configureStore({
  reducer: {
    // ... existing
    myfeature: myReducer,
  },
});
```

**Step 3**: Use in component

```typescript
const dispatch = useAppDispatch();
const data = useAppSelector((state) => state.myfeature.data);

dispatch(addData("new item"));
```

### Custom Tailwind Theme Extension

**File**: `src/index.css`

```css
@theme {
  /* Add custom colors */
  --color-DF-custom-primary: #abc123;
  --color-DF-custom-secondary: #def456;

  /* Add custom spacing */
  --spacing-DF-custom: 42px;

  /* Add custom shadows */
  --shadow-DF-custom: 0 4px 8px rgba(0, 0, 0, 0.2);
}
```

**Usage**:

```typescript
<div className="bg-DF-custom-primary shadow-DF-custom">
  Custom styled element
</div>
```

### Creating Custom Hooks

**Example: useSidebarNavigation**

```typescript
// src/hooks/useSidebarNavigation.ts
import { useAppDispatch, useAppSelector } from "../hooks";
import { toggle, setActiveAccordion } from "../store/sidebarSlice";

export function useSidebarNavigation() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);
  const activeAccordionId = useAppSelector(
    (state) => state.sidebar.activeAccordionId,
  );

  return {
    isOpen,
    activeAccordionId,
    toggleSidebar: () => dispatch(toggle()),
    setActiveAccordion: (id: string | null) => dispatch(setActiveAccordion(id)),
  };
}
```

### Implementing Real-Time Updates

**WebSocket Integration Pattern**:

```typescript
// src/services/websocket.ts
export class DashboardWebSocket {
  private ws: WebSocket | null = null;

  connect(url: string) {
    this.ws = new WebSocket(url);

    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // Dispatch Redux action with updated data
      store.dispatch(updateAnalytics(data));
    };
  }

  disconnect() {
    this.ws?.close();
  }
}
```

**Usage in Component**:

```typescript
useEffect(() => {
  const ws = new DashboardWebSocket();
  ws.connect("wss://api.example.com/analytics");

  return () => ws.disconnect();
}, []);
```

---

**Document Version**: 1.0  
**Last Updated**: February 2026  
**Author**: DashForge Development Team
