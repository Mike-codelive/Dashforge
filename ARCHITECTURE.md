# DashForge Architecture Guide

Comprehensive guide to the DashForge application architecture, design patterns, and technical implementation details.

## Table of Contents

1. [System Overview](#system-overview)
2. [Layer Architecture](#layer-architecture)
3. [Module Structure](#module-structure)
4. [Data Flow](#data-flow)
5. [Component Architecture](#component-architecture)
6. [State Management Design](#state-management-design)
7. [Styling System](#styling-system)
8. [Scalability Patterns](#scalability-patterns)
9. [Decision Documentation](#decision-documentation)

## System Overview

### High-Level System Design

DashForge is a **feature-first, modular, type-safe dashboard framework** built on modern web technologies. The system is designed to be:

- **Modular**: Features are self-contained and independent
- **Scalable**: Easy to add new dashboards and features
- **Type-Safe**: Full TypeScript from top to bottom
- **Performance-Optimized**: Code splitting, lazy loading, memoization
- **Maintainable**: Clear separation of concerns, established patterns

### Key Statistics

| Metric               | Value                        |
| -------------------- | ---------------------------- |
| React Version        | 19.2.0                       |
| TypeScript Coverage  | 100%                         |
| Built With           | Vite, Redux, Tailwind        |
| Supported Dashboards | 10+                          |
| Components           | 50+ reusable components      |
| State Slices         | 3 core + feature-specific    |
| Bundle Size          | ~1-2MB (with charts)         |
| Test Framework       | Jest + React Testing Library |

## Layer Architecture

### Application Layers

```
┌─────────────────────────────────────────────────────────────━┐
│                   Presentation Layer                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Routes & Pages                                      │   │
│  │  ├─ Dashboard, Analytics, CRM, etc.                 │   │
│  │  └─ Each route maps to a feature component          │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Component Layer                                     │   │
│  │  ├─ Atoms (Button, Icon)                            │   │
│  │  ├─ Molecules (Card, SearchInput)                   │   │
│  │  ├─ Organisms (Navbar, Sidebar)                     │   │
│  │  └─ Templates (RootLayout)                          │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────━┘
                             ▲
                             │ uses
┌─────────────────────────────────────────────────────────────━┐
│                   State Management Layer                      │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Redux Store                                         │   │
│  │  ├─ themeToggleSlice                                │   │
│  │  ├─ sidebarSlice                                    │   │
│  │  ├─ teamSlice                                       │   │
│  │  └─ [Feature Slices]                                │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Hooks & Selectors                                   │   │
│  │  └─ useAppDispatch, useAppSelector                  │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────━┘
                             ▲
                             │ uses
┌─────────────────────────────────────────────────────────────━┐
│                   Data/Business Logic Layer                   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Feature Data                                        │   │
│  │  ├─ Mock data files                                │   │
│  │  └─ Types and interfaces                            │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Utilities & Helpers                                │   │
│  │  ├─ Configuration objects                           │   │
│  │  └─ Utility functions                               │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────━┘
                             ▲
                             │ (Future: API Integration)
┌─────────────────────────────────────────────────────────────━┐
│                    External Services                          │
│  ├─ REST API (planned)                                       │
│  ├─ WebSocket (planned)                                      │
│  └─ Third-party services                                     │
└─────────────────────────────────────────────────────────────━┘
```

### Layer Responsibilities

| Layer          | Responsibility                      | Technologies              |
| -------------- | ----------------------------------- | ------------------------- |
| Presentation   | Render UI, handle user interactions | React, Router, Components |
| State          | Manage application state            | Redux Toolkit, Slices     |
| Business Logic | Process data, business rules        | Utilities, Services       |
| Data           | Mock data, types, configuration     | JSON, TypeScript          |

## Module Structure

### Feature Module Pattern

Each feature (dashboard) follows a consistent, scalable structure:

```
features/analytics/
├── Analitics.tsx                    # Main feature component
├── components/                      # Feature-specific components
│   ├── AnalyticsStatCard.tsx
│   ├── AudienceMetricCard.tsx
│   ├── LiveUsersByCountry.tsx
│   └── ...
├── sections/                        # Feature sections/containers
│   ├── AnalyticsStats.tsx
│   ├── AudienceMetrics.tsx
│   ├── SessionsByCountries.tsx
│   └── ...
├── data/                           # Mock/static data
│   ├── analyticsStats.ts
│   ├── audienceMetrics.ts
│   ├── liveUsersByCountry.ts
│   └── ...
├── types/                          # Feature-specific types
│   └── index.ts
└── [Feature Slice] (optional)      # Redux slice if needed
```

### Benefits of Feature Module Pattern

✅ **Self-Contained**: Each feature is independent  
✅ **Easy Discoverability**: Clear file organization  
✅ **Scalability**: Simple to add new features  
✅ **Testing**: Feature-level testing is straightforward  
✅ **Code Reuse**: Components can be exported for other features

### Module Addition Step-by-Step

**1. Create Feature Folder**

```bash
mkdir -p src/features/newdash/{components,sections,data,types}
```

**2. Create Main Component**

```typescript
// src/features/newdash/NewDash.tsx
export const NewDash = () => {
  return (
    <section>
      <NewDashSectionOne />
      <NewDashSectionTwo />
    </section>
  );
};
```

**3. Create Route Component**

```typescript
// src/app/routes/newdash.tsx
import { NewDash } from "../../features/newdash/NewDash";

export const NewDashRoute = () => {
  return <NewDash />;
};
```

**4. Register Route**

```typescript
// src/app/router.tsx
import { NewDashRoute } from "./routes/newdash";

{ path: "newdash", element: <NewDashRoute /> }
```

**5. Add to Navigation**

```typescript
// src/config/sidebar.config.ts
{
  label: "New Dashboard",
  to: "/newdash"
}
```

## Data Flow

### User Interaction Flow

```
User Action (click, type, etc.)
        │
        ▼
Component Handler
        │
        ▼
Decision: Local State or Redux?
    ├─ Local:  useState for UI state
    └─ Global: dispatch Redux action
        │
        ▼
Reducer Updates State
        │
        ▼
Selectors Extract Data
        │
        ▼
Component Re-renders
        │
        ▼
UI Updated
```

### Theme Toggle Example

```typescript
// 1. User clicks theme toggle button
<button onClick={() => dispatch(toggle())} />

// 2. Reducer updates state
const themeToggleSlice = createSlice({
  reducers: {
    toggle: (state) => {
      state.value = state.value === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', state.value); // Side effect
    },
  },
});

// 3. Selector gets new state
const theme = useAppSelector(state => state.themeToggle.value);

// 4. Effect applies theme to DOM
useEffect(() => {
  const html = document.documentElement;
  if (theme === "dark") {
    html.classList.add("dark");
  }
}, [theme]);

// 5. Tailwind updates visual styling
<div className="bg-white dark:bg-black">
```

### Redux State Lifecycle

```
Initial State (from localStorage or defaults)
        │
        ▼
App Mounts
        │
        ├─ Hydrate from localStorage (theme)
        ├─ Initialize UI state (sidebar closed)
        └─ Load feature state (if needed)
        │
        ▼
User Interaction
        │
        ├─ Click button → dispatch action
        ├─ Type in input → dispatch action
        └─ Navigate → route change
        │
        ▼
Reducer Processes Action
        │
        ├─ Update state
        ├─ Persist if needed (localStorage)
        └─ Trigger side effects if any
        │
        ▼
Store Updates
        │
        ▼
Subscribed Components Re-render
        │
        ├─ Selector returns new data
        ├─ Props change
        └─ Component re-renders
        │
        ▼
DOM Updates
        │
        └─ Visual feedback to user
```

## Component Architecture

### Component Classification

#### Atoms (Basic Building Blocks)

Files: `src/components/{atomic}/`

Examples:

- `Button.tsx` - Basic button
- Icon components (Sun.tsx, Moon.tsx, etc.)
- Form inputs
- Text/Typography elements

**Characteristics**:

- Single, focused purpose
- Highly reusable
- No dependencies on other components
- Fully typed props

#### Molecules (Simple Combinations)

Files: `src/components/{molecules}/`

Examples:

- `Card.tsx` - Container with styling
- `SearchInput.tsx` - Input with search icon
- `SidebarToggle.tsx` - Button with toggle logic
- Badge with label

**Characteristics**:

- Combination of 2-3 atoms
- Still reusable across features
- Single functional purpose
- Well-defined API

#### Organisms (Complex Combinations)

Files: `src/components/` or `src/features/[name]/components/`

Examples:

- `Navbar.tsx` - Full navigation bar
- `Sidebar.tsx` - Full sidebar navigation
- `Chart.tsx` - Wrapper for chart library
- `MapChart.tsx` - Geographic visualization

**Characteristics**:

- Complex composition of molecules
- Feature-aware but still reusable
- Manage local state and side effects
- May connect to Redux

#### Templates (Layout Structures)

Files: `src/app/routes/root.tsx`

Examples:

- `RootLayout` - Main application shell
- Feature-specific layouts

**Characteristics**:

- Define overall page structure
- Persistent across routes (if in Root Layout)
- Manage high-level layout state
- Coordinate child sections

### Component Composition Example

```
RootLayout (Template)
├── Navbar (Organism)
│   ├── SidebarToggle (Molecule)
│   │   └── Button (Atom)
│   ├── SearchInput (Molecule)
│   │   ├── Input (Atom)
│   │   └── Search Icon (Atom)
│   └── ThemeToggle (Molecule)
│       └── Button (Atom)
├── Sidebar (Organism)
│   └── SidebarItemWithSubmenu (Molecule)
│       ├── Text (Atom)
│       ├── Icon (Atom)
│       └── Chevron Icon (Atom)
└── Dashboard (Feature Component)
    ├── Card (Molecule) × many
    │   └── ArrowIcon (Atom)
    └── Chart (Organism)
```

### Component Props Pattern

**Type-Safe Props Definition**:

```typescript
type CardProps = {
  // Required props
  title: string;

  // Optional props with defaults
  counterNumb?: number;
  statusNumb?: "green" | "red" | "gray";

  // Callback props
  onAction?: (id: string) => void;

  // Children
  children?: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({
  title,
  counterNumb,
  statusNumb,
  onAction,
  children,
}) => {
  // Component implementation
};
```

### Component Naming Conventions

| Item              | Convention         | Example                      |
| ----------------- | ------------------ | ---------------------------- |
| Component File    | PascalCase         | `ThemeToggle.tsx`            |
| Component Export  | PascalCase         | `export const ThemeToggle`   |
| Props Type        | `{Component}Props` | `ThemeToggleProps`           |
| Internal Function | camelCase          | `handleClick()`              |
| Event Handler     | `handle{Event}`    | `handleToggleClick()`        |
| Boolean State     | `is{State}`        | `isOpen`, `isLoading`        |
| Custom Hook       | `use{Purpose}`     | `useTheme()`, `useSidebar()` |

## State Management Design

### Redux Slice Anatomy

**Structure**:

```typescript
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// 1. Type Definition
type MySliceState = {
  value: string;
  items: Item[];
};

// 2. Initial State
const initialState: MySliceState = {
  value: "default",
  items: [],
};

// 3. Slice Creation
const mySlice = createSlice({
  name: "myfeature", // Unique name
  initialState,
  reducers: {
    // Synchronous reducers
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
  },
  // extraReducers: handle async actions here (for future use)
});

// 4. Export Actions
export const { setValue, addItem } = mySlice.actions;

// 5. Export Reducer
export default mySlice.reducer;
```

### Redux Store Setup

**File**: `src/store/store.ts`

```typescript
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    themeToggle: themeToggleReducer,
    sidebar: sidebarReducer,
    team: teamReducer,
    // Add more feature slices as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

**Benefits of `configureStore`**:

- Automatic middleware setup (thunk, immutability checks)
- Redux DevTools integration
- Simplified configuration

### Selector Patterns

**Basic Selector** (inline):

```typescript
const theme = useAppSelector((state) => state.themeToggle.value);
```

**Defined Selector** (reusable):

```typescript
// selectors.ts
export const selectTheme = (state: RootState) => state.themeToggle.value;
export const selectIsSidebarOpen = (state: RootState) => state.sidebar.isOpen;

// In component
const theme = useAppSelector(selectTheme);
```

**Memoized Selector** (with Reselect - recommended for complex selectors):

```typescript
import { createSelector } from "@reduxjs/toolkit";

export const selectVisibleItems = createSelector(
  (state: RootState) => state.items.items,
  (state: RootState) => state.filter.query,
  (items, query) => items.filter((item) => item.name.includes(query)),
);
```

### When to Use Redux vs React State

| Scenario                    | Use Redux | Use React State |
| --------------------------- | --------- | --------------- |
| Shared across 2+ components | ✅        | ❌              |
| UI state (modal, tabs)      | ❌        | ✅              |
| Form input                  | ❌        | ✅              |
| Theme, user preferences     | ✅        | ❌              |
| Search query (global)       | ✅        | ❌              |
| Form for a single component | ❌        | ✅              |
| Need persistence            | ✅        | ❌\*            |
| Needs time-travel debugging | ✅        | ❌              |

\*React state can be persisted to localStorage manually

## Styling System

### Tailwind CSS + Design System

**File**: `src/index.css`

```css
@import "tailwindcss";

@theme {
  /* Define custom design system values */
  --color-DF-surface: #fff;
  --color-DF-surface-dark: #121215;
  --color-DF-green: #0ab39c;
  --color-DF-blue: #299cdb;
  --color-DF-danger: #f06548;

  --width-DF-sb-left: 70px;
  --spacing-DF-nav-side-isopen: 250px;
  --height-DF-nav-top: 70px;
}
```

### Color System

**Semantic Colors**:

- `DF-green` (#0ab39c) - Success, positive
- `DF-blue` (#299cdb) - Primary, info
- `DF-danger` (#f06548) - Error, negative
- `DF-muted` - Secondary text

**Surface Colors**:

- Light: `DF-surface` (white), `DF-bg-light`
- Dark: `DF-surface-dark`, `DF-bg-dark`, `DF-main-bg-dark`

### Dark Mode Implementation

**How it Works**:

1. **State**: Redux slice stores theme preference

   ```typescript
   themeToggle.value: 'dark' | 'light'
   ```

2. **DOM**: Effect updates `<html class="dark">`

   ```typescript
   useEffect(() => {
     if (theme === "dark") {
       document.documentElement.classList.add("dark");
     }
   }, [theme]);
   ```

3. **CSS**: Tailwind amplifies with `dark:` variant

   ```tailwind
   <div className="bg-white dark:bg-black">
   ```

4. **Persistence**: localStorage saves preference
   ```typescript
   localStorage.setItem("theme", theme);
   ```

### Responsive Breakpoints

```
Mobile First Default Styles
        │
        ├─ sm: 640px   (small devices)
        ├─ md: 768px   (tablets)
        ├─ lg: 1024px  (desktops)
        ├─ xl: 1280px  (large desktops)
        └─ 2xl: 1536px (extra large)
```

**Common Responsive Patterns**:

```typescript
// Hide on mobile, show on desktop
className = "hidden md:block";

// Stack on mobile, grid on desktop
className = "flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4";

// Adjust spacing
className = "p-2 md:p-4 lg:p-6";

// Adjust typography
className = "text-sm md:text-base lg:text-lg";
```

## Scalability Patterns

### Adding a New Feature

**Phase 1: Create Feature Structure**

```bash
mkdir -p src/features/newfeature/{components,sections,data,types}
touch src/features/newfeature/NewFeature.tsx
```

**Phase 2: Implement Components**

```typescript
// NewFeature.tsx
export const NewFeature = () => {
  return (
    <>
      <Section1 />
      <Section2 />
    </>
  );
};

// sections/Section1.tsx
export const Section1 = () => {
  return <div className="...">Section 1</div>;
};
```

**Phase 3: Create Route**

```typescript
// app/routes/newfeature.tsx
export const NewFeatureRoute = () => {
  return <NewFeature />;
};

// app/router.tsx
{ path: "newfeature", element: <NewFeatureRoute /> }
```

**Phase 4: Register in Navigation**

```typescript
// config/sidebar.config.ts
{
  label: "New Feature",
  to: "/newfeature"
}
```

### Creating a Feature Redux Slice

**File**: `src/features/newfeature/newFeatureSlice.ts`

```typescript
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type NewFeatureState = {
  selectedItem: string | null;
  items: Item[];
};

const initialState: NewFeatureState = {
  selectedItem: null,
  items: [],
};

const newFeatureSlice = createSlice({
  name: "newfeature",
  initialState,
  reducers: {
    selectItem: (state, action: PayloadAction<string>) => {
      state.selectedItem = action.payload;
    },
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
  },
});

export const { selectItem, addItem } = newFeatureSlice.actions;
export default newFeatureSlice.reducer;
```

**Register in Store**:

```typescript
// src/store/store.ts
import newFeatureReducer from "../features/newfeature/newFeatureSlice";

export const store = configureStore({
  reducer: {
    // ... existing
    newfeature: newFeatureReducer,
  },
});
```

### Performance Optimization Patterns

**1. Component Memoization**

```typescript
export const ExpensiveChart = React.memo(
  ({ data, options }: ChartProps) => {
    // Only re-renders if data or options change
    return <ApexChart {...} />;
  }
);
```

**2. Selector Memoization**

```typescript
import { createSelector } from "@reduxjs/toolkit";

// Only recomputes when dependencies change
export const selectFilteredItems = createSelector(
  [selectItems, selectFilter],
  (items, filter) => items.filter((item) => match(item, filter)),
);
```

**3. Lazy Loading Routes**

```typescript
import { lazy, Suspense } from 'react';

const Analytics = lazy(() => import('../features/analytics'));

// In router
{
  path: "analytics",
  element: (
    <Suspense fallback={<Loading />}>
      <Analytics />
    </Suspense>
  )
}
```

## Decision Documentation

### Key Architectural Decisions

#### D1: Feature-Based Modularization

**Decision**: Organize code by feature (dashboard) rather than layer (components, types, etc.)

**Rationale**:

- Better code locality
- Easier to understand feature context
- Simpler to add/remove features
- Scales better with team size

**Alternative Considered**: Layer-based organization
**Why Not**: Scattered files for single feature, hard to follow dependencies

---

#### D2: Redux Toolkit for State Management

**Decision**: Use Redux Toolkit (not vanilla Redux, MobX, or Zustand)

**Rationale**:

- Official Redux recommendation
- Slice pattern simplifies boilerplate
- Built-in Immer for immutable updates
- DevTools integration
- Mature ecosystem
- Team familiarity

**Alternative Considered**: Custom Context API
**Why Not**: Doesn't scale well, no DevTools, more boilerplate

---

#### D3: Tailwind CSS + Custom Design System

**Decision**: Tailwind with custom theme values, not styled-components or CSS-in-JS

**Rationale**:

- Utility-first is faster
- Design system consistency
- Smaller bundle
- Dark mode support excellent
- Better performance

**Alternative Considered**: CSS modules
**Why Not**: Less maintainable for design system, bigger bundle

---

#### D4: Vite over Create React App or Next.js

**Decision**: Use Vite as build tool, not CRA, Next.js, or Remix

**Rationale**:

- 100x faster HMR
- Faster builds
- Native ESM support
- Smaller config
- Better for SPA needs

**Alternative Considered**: Next.js
**Why Not**: Overkill for SPA, more overhead, SSR not needed

---

#### D5: TypeScript Strict Mode

**Decision**: Enable all strict TypeScript checks

**Rationale**:

- Catch bugs at compile time
- Better IDE support
- Clearer code intentions
- Easier refactoring

**Trade-off**: Slightly more verbose type annotations
**Decision**: Worth it

---

### Future Decision Points

#### D6: API Integration (Planned)

**Candidates**:

1. **RTK Query** - Built into Redux Toolkit, caching, dev experience
2. **TanStack Query** - Powerful, agnostic, industry standard
3. **SWR** - Lightweight, focused on data fetching

**Recommendation**: RTK Query for tight Redux integration

#### D7: Real-Time Updates (Planned)

**Candidates**:

1. **Socket.io** - Mature, feature-rich, fallbacks
2. **WebSocket** - Native, lightweight, no library needed
3. **Server-Sent Events** - Lighter weight, one-way

**Recommendation**: Socket.io for reliability and DX

#### D8: Internationalization (Planned)

**Candidates**:

1. **react-i18next** - Most popular, flexible, great DX
2. **react-intl** - Strong format support
3. **next-intl** - Next.js focused

**Recommendation**: react-i18next

---

## References

### Core Concepts Used

- **Atomic Design**: Component classification
- **Feature Flags**: Selective feature enablement
- **Container/Presentational**: Component patterns
- **Observer Pattern**: Redux subscription model
- **Factory Pattern**: createSlice utility

### Related Documentation

- [TECHNICAL.md](TECHNICAL.md) - Implementation details
- [README.md](README.md) - Quick start and overview

### External References

- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Document Version**: 1.0  
**Last Updated**: February 2026  
**Author**: DashForge Architecture Team
