# DashForge Developer Quick Reference

A concise guide for developers working with DashForge. Bookmark this for quick lookups.

## Quick Commands

```bash
# Development
npm run dev         # Start development server (http://localhost:5173)
npm run build       # Production build with type checking
npm run preview     # Preview production build

# Testing & Quality
npm test            # Run Jest tests
npm run coverage    # Test coverage report
npm run lint        # ESLint code quality check

# Useful Git
git checkout -b feature/name          # Create feature branch
git commit -m "feat: description"     # Conventional commits
```

## File Organization

### Where to Put Things

| Item                | Location                 |
| ------------------- | ------------------------ |
| New dashboard       | `src/features/newname/`  |
| Shared UI component | `src/components/`        |
| Global Redux state  | `src/store/`             |
| App configuration   | `src/config/`            |
| Icon components     | `src/icons/`             |
| Global styles       | `src/index.css`          |
| Routes              | `src/app/routes/`        |
| Tests               | Co-locate with component |

## Creating a New Dashboard

### 1. Feature Folder Structure

```bash
mkdir -p src/features/mydash/{components,sections,data,types}
```

### 2. Main Component

```typescript
// src/features/mydash/MyDash.tsx
export const MyDash = () => {
  return (
    <section className="space-y-6">
      <MyDashSection1 />
      <MyDashSection2 />
    </section>
  );
};
```

### 3. Route Component

```typescript
// src/app/routes/mydash.tsx
import { MyDash } from "../../features/mydash/MyDash";

export const MyDashRoute = () => {
  return <MyDash />;
};
```

### 4. Update Router

```typescript
// src/app/router.tsx
import { MyDashRoute } from "./routes/mydash";

// Add to children array:
{ path: "mydash", element: <MyDashRoute /> }
```

### 5. Update Navigation

```typescript
// src/config/sidebar.config.ts
{
  label: "My Dashboard",
  to: "/mydash"
}
```

## Redux Quick Reference

### Using Redux State

```typescript
// Import typed hooks
import { useAppDispatch, useAppSelector } from "../hooks";

// Read from state
const value = useAppSelector((state) => state.themeToggle.value);

// Dispatch action
const dispatch = useAppDispatch();
dispatch(toggle());
```

### Creating a New Slice

```typescript
// src/store/mySlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type MyState = { items: string[] };
const initialState: MyState = { items: [] };

const mySlice = createSlice({
  name: "myfeature",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = mySlice.actions;
export default mySlice.reducer;
```

### Register Slice in Store

```typescript
// src/store/store.ts
import myReducer from "./mySlice";

export const store = configureStore({
  reducer: {
    // ... existing slices
    myfeature: myReducer,
  },
});
```

## Component Patterns

### Typed Component

```typescript
import { FC } from 'react';

type Props = {
  title: string;
  count?: number;
  onAction?: (id: string) => void;
};

export const MyComponent: FC<Props> = ({ title, count, onAction }) => {
  return (
    <div>
      <h2>{title}</h2>
      {count && <span>{count}</span>}
    </div>
  );
};
```

### Component with Hooks

```typescript
import { useState, useEffect } from 'react';
import { useAppSelector } from '../hooks';

export const Component = () => {
  // Local state
  const [isOpen, setIsOpen] = useState(false);

  // Redux state
  const theme = useAppSelector(state => state.themeToggle.value);

  // Effects
  useEffect(() => {
    // Cleanup code
    return () => {};
  }, []);

  // Handlers
  const handleToggle = () => setIsOpen(!isOpen);

  // Render
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <button onClick={handleToggle}>
        {isOpen ? 'Close' : 'Open'}
      </button>
    </div>
  );
};
```

### Memoized Component

```typescript
import { memo } from 'react';

export const Chart = memo(({ data, options }) => {
  return <ApexChart series={data} options={options} />;
});

Chart.displayName = 'Chart';
```

## Styling Quick Reference

### Tailwind Classes

```typescript
// Spacing
<div className="p-4 m-2 gap-6" />

// Colors
<div className="bg-white text-black dark:bg-black dark:text-white" />

// Flexbox
<div className="flex items-center justify-between gap-4" />

// Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" />

// Responsive
className="text-sm md:text-base lg:text-lg"
className="hidden md:block"
className="w-full md:w-1/2"

// Transitions
className="transition-all duration-300 ease-out"
```

### Custom Design System Classes

```typescript
// Colors from theme
<div className="bg-DF-surface dark:bg-DF-surface-dark" />
<div className="text-DF-green" />
<div className="bg-DF-blue" />

// Common combinations
className="card-shadow bg-DF-surface dark:bg-DF-bg-dark rounded-md"
```

## Routing

### Navigate to a Page

```typescript
import { Link, useNavigate } from 'react-router-dom';

// Declarative
<Link to="/analytics" className="...">Analytics</Link>

// Programmatic
const navigate = useNavigate();
navigate('/dashboard');
navigate('/team?search=john');
```

### Get Current Route

```typescript
import { useLocation } from "react-router-dom";

const location = useLocation();
console.log(location.pathname); // '/analytics'
console.log(location.search); // '?search=john'
```

## Testing Patterns

### Basic Test

```typescript
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders title', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

### With Redux

```typescript
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { MyComponent } from './MyComponent';

describe('MyComponent with Redux', () => {
  it('reads from store', () => {
    render(
      <Provider store={store}>
        <MyComponent />
      </Provider>
    );
    // Test assertions
  });
});
```

### User Interactions

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('handles click', async () => {
  render(<MyComponent />);
  const button = screen.getByRole('button', { name: /click/i });

  await userEvent.click(button);

  expect(screen.getByText('Clicked')).toBeInTheDocument();
});
```

## Types & Interfaces

### Common Redux Types

```typescript
import { RootState, AppDispatch } from "../store/store";
import { TypedUseSelectorHook } from "react-redux";

// Already exported from hooks.ts:
export const useAppDispatch: () => AppDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState>;

// But you can also do:
const dispatch: AppDispatch = useAppDispatch();
const state: RootState = getState();
```

### Type a Component's Props

```typescript
type CardProps = {
  // Required
  title: string;
  value: number;

  // Optional with defaults
  icon?: IconName;
  statusNumb?: "green" | "red" | "gray";

  // Callback
  onClick?: (e: React.MouseEvent) => void;

  // Children
  children?: React.ReactNode;
};
```

## Debugging Tips

### Redux DevTools

1. Install **Redux DevTools** browser extension
2. Open DevTools (F12)
3. Go to Redux tab
4. See all actions and state changes
5. Time-travel debug

### Console Logging

```typescript
// Log Redux state
store.subscribe(() => {
  console.log("Current state:", store.getState());
});

// Log components
console.log("MyComponent rendered at", new Date().toLocaleTimeString());
```

### React DevTools

1. Install **React Developer Tools**browser extension
2. Inspect components in DevTools
3. See props and hooks
4. Modify props to test

## Common Errors & Fixes

| Error                                       | Cause                      | Fix                                                 |
| ------------------------------------------- | -------------------------- | --------------------------------------------------- |
| "Cannot read property 'value' of undefined" | Selecting wrong state path | Check `useAppSelector` path matches slice name      |
| "dispatch is not a function"                | Incorrect hook             | Use `useAppDispatch()` not `useDispatch()`          |
| "Module not found"                          | Wrong import path          | Check relative paths, use `@/` alias                |
| "dark class not applied"                    | Domain state not synced    | Check `themeToggle.value` and HTML class            |
| Test fails with "Cannot find element"       | Wrong query selector       | Use `getByRole`, `getByLabelText` not `getByTestId` |
| HMR not updating                            | Dev server crashed         | Restart `npm run dev`                               |
| Type errors after install                   | TS cache stale             | Run `npm run build` or restart IDE                  |

## Performance Checklist

Before submitting PR:

- [ ] Components memoized if expensive
- [ ] No inline object/function creation in render
- [ ] Images optimized
- [ ] Bundle size reasonable
- [ ] No console errors/warnings
- [ ] Tests pass and coverage >80%
- [ ] ESLint passes
- [ ] TypeScript strict mode OK
- [ ] Dark mode works
- [ ] Mobile responsive

## Code Style

### Naming Conventions

```typescript
// Components: PascalCase
const MyComponent = () => {}

// Functions/variables: camelCase
const myFunction = () => {}
const myVariable = 5

// Constants: UPPER_SNAKE_CASE
const MAX_ITEMS = 100
const SIDEBAR_ITEMS = [...]

// Boolean: is/has prefix
const isOpen = true
const hasError = false

// Event handlers: handle{Event}
const handleClick = () => {}
const handleChange = () => {}

// Types: PascalCase suffix
type Props = {}
type State = {}
```

### Import Organization

```typescript
// 1. React
import { useState } from "react";

// 2. Third-party
import { useSelector } from "react-redux";
import axios from "axios";

// 3. Local absolute imports
import { useAppSelector } from "@/hooks";

// 4. Local relative imports
import { helper } from "../utils";

// 5. Styles
import "./Component.css";
```

## Resources

### Project Documentation

- [README.md](README.md) - Overview
- [TECHNICAL.md](TECHNICAL.md) - Technical details
- [ARCHITECTURE.md](ARCHITECTURE.md) - Architecture guide

### External Resources

- [React Docs](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com)

### IDE Setup

**VS Code Extensions**:

- ESLint
- Prettier
- Redux DevTools
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin

## Git Workflow

```bash
# Start feature
git checkout -b feature/new-feature

# Commit regularly
git add .
git commit -m "feat: add new feature"
git commit -m "fix: correct typo"
git commit -m "refactor: improve component"

# Before PR
git fetch origin
git rebase origin/main

# Push and create PR
git push origin feature/new-feature
```

**Commit Types**:

- `feat:` - New feature
- `fix:` - Bug fix
- `refactor:` - Code improvement
- `perf:` - Performance improvement
- `test:` - Test changes
- `docs:` - Documentation
- `style:` - Formatting only

---

**Keep this handy! Bookmark and reference during development.**

_Last Updated: February 2026_
