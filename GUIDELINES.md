# Development Guidelines - DashForge

Comprehensive guidelines for maintaining code quality, consistency, and scalability when developing for DashForge.

## Table of Contents

1. [Code Standards](#code-standards)
2. [Git Workflow](#git-workflow)
3. [Component Development](#component-development)
4. [State Management](#state-management)
5. [Testing Requirements](#testing-requirements)
6. [Performance Guidelines](#performance-guidelines)
7. [Accessibility & UX](#accessibility--ux)
8. [Documentation Requirements](#documentation-requirements)
9. [Code Review Checklist](#code-review-checklist)
10. [Deployment Guidelines](#deployment-guidelines)

## Code Standards

### TypeScript Rules

#### Must Have

✅ **Strict Mode Enabled**

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,           // All strict options enabled
    "noImplicitAny": true,    // No implicit any
    "strictNullChecks": true, // Null/undefined checks
    "strictFunctionTypes": true,
    "noUnusedLocals": true,   // Warn unused variables
  }
}
```

✅ **Explicit Types for Functions**

```typescript
// ✅ Good
function formatNumber(value: number): string {
  return value.toLocaleString();
}

const handleClick = (e: React.MouseEvent): void => {
  // ...
};

// ❌ Bad
function formatNumber(value) {
  return value.toLocaleString();
}

const handleClick = (e) => {
  // ...
};
```

✅ **Explicit Types for Component Props**

```typescript
// ✅ Good
type ButtonProps = {
  label: string;
  onClick: (e: React.MouseEvent) => void;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return <button onClick={onClick} disabled={disabled}>{label}</button>;
};

// ❌ Bad
export const Button = ({ label, onClick, disabled }) => {
  return <button onClick={onClick} disabled={disabled}>{label}</button>;
};
```

✅ **Avoid `any` Type**

```typescript
// ✅ Good - Use unknown then narrow
function handleData(data: unknown) {
  if (typeof data === "object" && data !== null && "id" in data) {
    console.log(data.id);
  }
}

// ✅ Good - Use specific type
function processItem(item: DataItem) {
  // ...
}

// ❌ Bad
function handleData(data: any) {
  return data.id; // Loss of type safety
}
```

✅ **Union Types Over Booleans**

```typescript
// ✅ Good - More descriptive
type Status = "pending" | "success" | "error";
const [status, setStatus] = useState<Status>("pending");

// ❌ Less Clear
type Status = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
};
```

### ESLint & Formatting

**Run Before Commit**:

```bash
npm run lint   # Must pass with no errors
npm run build  # Must compile without errors
```

**Auto-Fix Issues**:

```bash
npx eslint src --fix
```

### Naming Conventions

| Category          | Convention                | Examples                                  |
| ----------------- | ------------------------- | ----------------------------------------- |
| Components        | PascalCase                | `Dashboard.tsx`, `UserCard.tsx`           |
| Component Files   | PascalCase                | same as export                            |
| Functions         | camelCase                 | `calculateTotal()`, `formatDate()`        |
| Variables         | camelCase                 | `userCount`, `isLoading`                  |
| Constants         | UPPER_SNAKE_CASE          | `MAX_RETRIES`, `DEFAULT_TIMEOUT`          |
| Boolean Variables | `is/has` prefix           | `isOpen`, `hasError`                      |
| Event Handlers    | `handle{Event}`           | `handleClick()`, `handleSubmit()`         |
| Redux Actions     | descriptive + action type | `setSearchQuery`, `toggleSidebar`         |
| Custom Hooks      | `use` prefix              | `useAuth()`, `useSidebar()`               |
| Folders           | kebab-case                | `src/my-feature/`, `src/components/`      |
| Static Data Files | kebab-case                | `dashboard-config.ts`, `api-endpoints.ts` |

### Code Organization

**File Structure Within Component**:

```typescript
// 1. Imports (React, third-party, local)
import { useState, useEffect } from 'react';
import { useAppSelector } from '../hooks';
import { MyService } from '../services';
import styles from './Component.module.css';

// 2. Types/Interfaces
type ComponentProps = {
  data: DataType;
  onChange?: (value: string) => void;
};

// 3. Component
export const Component: React.FC<ComponentProps> = ({ data, onChange }) => {
  // 3a. Hooks (useState, useContext, etc.)
  const [state, setState] = useState('');
  const dispatch = useAppDispatch();

  // 3b. Derived state/computed values
  const isValid = state.length > 0;

  // 3c. Effects
  useEffect(() => {
    // Side effects
  }, []);

  // 3d. Event handlers
  const handleChange = (value: string) => {
    setState(value);
    onChange?.(value);
  };

  // 3e. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

// 5. Export (if not at component declaration)
```

**Maximum Line Length**: 100 characters
**Maximum Function Length**: 50 lines (refactor if longer)
**Maximum File Size**: 300 lines (split into smaller files)

## Git Workflow

### Branch Naming

```
feature/short-description     # New feature
fix/issue-description         # Bug fix
refactor/area                 # Code improvement
docs/what-changed             # Documentation
perf/optimization-area        # Performance
test/test-area                # Tests

Examples:
- feature/team-search
- fix/dark-mode-colors
- refactor/chart-component
- docs/redux-setup
- perf/bundle-size
```

### Commit Messages

**Format**:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type**:

- `feat` - New feature
- `fix` - Bug fix
- `refactor` - Code improvement without feature change
- `perf` - Performance improvement
- `test` - Test changes
- `docs` - Documentation
- `style` - Formatting, whitespace, semicolons
- `chore` - Build, dependencies, tooling

**Scope** (optional):

- `dashboard`, `analytics`, `team`, etc.
- Or component name: `card`, `chart`, `sidebar`

**Examples**:

```
feat(analytics): add user retention chart

fix(sidebar): correct accordion state persistence

refactor(chart): extract reusable chart wrapper

perf(dashboard): memoize expensive components

docs(redux): document theme slice

test(card): add props validation tests
```

### Pull Request Process

1. **Create Branch**

```bash
git checkout -b feature/my-feature
```

2. **Make Changes** (Commit regularly)

```bash
git add .
git commit -m "feat: add feature"
git commit -m "fix: address review comment"
```

3. **Keep Updated**

```bash
git fetch origin
git rebase origin/main
# or
git merge origin/main
```

4. **Push & Create PR**

```bash
git push origin feature/my-feature
# Then create PR on GitHub
```

5. **PR Description Template**

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

How was this tested?

- [ ] Unit tests added
- [ ] Manual testing performed
- [ ] Tested in light mode
- [ ] Tested in dark mode
- [ ] Responsive tested

## Screenshots (if applicable)

Add screenshots for UI changes

## Related Issues

Closes #123
```

6. **Address Reviews**

```bash
# Make changes based on feedback
git add .
git commit -m "refactor: address review comments"
git push
```

No force push permitted without approval. Rebase before merging.

## Component Development

### Component Conventions

**File Naming**:

```
✅ Good
src/components/ThemeToggle.tsx
src/features/dashboard/components/Dashboard.tsx

❌ Bad
src/components/themeToggle.tsx      # Should be PascalCase
src/components/ThemeToggle/index.tsx # Remove index re-exports
```

**Export Style**:

```typescript
// ✅ Preferred - Direct export
export const MyComponent = () => {};

// ❌ Avoid
export default MyComponent;

// ❌ Avoid - Index re-exports
// index.ts: export { MyComponent } from './MyComponent'
```

**Type Exports**:

```typescript
// ✅ Include types nearby
type MyComponentProps = {
  // ...
};

export const MyComponent: React.FC<MyComponentProps> = (props) => {};

// If shared across features:
// src/components/MyComponent.types.ts
export type MyComponentProps = {
  /* ... */
};

// src/components/MyComponent.tsx
import type { MyComponentProps } from "./MyComponent.types";
```

### Component Best Practices

**1. Props Drilling Prevention**

```typescript
// ❌ Bad - Props drilling through multiple components
<Navbar theme={theme} user={user} />
  <Header theme={theme} user={user} />
    <UserMenu user={user} />

// ✅ Good - Use Redux/Context for global state
const user = useAppSelector(state => state.user);
```

**2. Key Props in Lists**

```typescript
// ✅ Good - Use stable IDs
{items.map(item => (
  <Card key={item.id} {...item} />
))}

// ❌ Bad - Index is unstable
{items.map((item, index) => (
  <Card key={index} {...item} />
))}
```

**3. Conditional Rendering**

```typescript
// ✅ Clear and concise
if (isLoading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} />;

// ✅ With JSX
{isOpen && <Popup />}

// ✅ Clear ternary
{status === 'success' ? <Success /> : <Pending />}

// ❌ Avoid nested ternary
{status === 'success' ? <Success /> : status === 'error' ? <Error /> : <Pending />}

// ❌ Avoid inline conditional
{isOpen ? 'Open' : null}  // Use && instead
{isOpen && 'Open'}        // Clearer
```

**4. Event Handlers**

```typescript
// ✅ Good - Named handlers
const handleClick = () => { /* ... */ };
return <button onClick={handleClick} />;

// ✅ With parameters
const handleDelete = (id: string) => { /* ... */ };
return <button onClick={() => handleDelete(item.id)} />;

// ❌ Avoid - Inline logic
return <button onClick={() => dispatch(toggle())} />;  // Extract to handler

// ❌ Avoid - Creating new function on each render
return <button onClick={() => handleClick()} />;  // Just pass reference
```

**5. Hooks Best Practices**

```typescript
// ✅ Good - Dependency arrays
useEffect(() => {
  const subscription = setup();
  return () => subscription.unsubscribe();
}, [dependency]);

// ✅ Multiple effects per concern
useEffect(() => {
  // Setup theme
}, [theme]);

useEffect(() => {
  // Setup sidebar
}, [isOpen]);

// ❌ Bad - Missing dependencies
useEffect(() => {
  console.log(data); // Missing 'data' in deps
}, []);

// ❌ Bad - Hooks not at top level
if (condition) {
  useState(); // ❌ Rules of hooks violation
}
```

## State Management

### When to Use What

```
Local Component State
├─ useState
├─ useReducer
└─ Refs (useRef)

Shared/Global State
├─ Redux (recommended)
├─ Context API (simple cases)
└─ External libraries (Zustand, etc.)

Async Operations
├─ Redux Thunk (planned: RTK Query)
├─ Custom hooks
└─ Libraries (React Query, SWR)
```

### Redux Rules

**1. Never Mutate State Directly**

```typescript
// ❌ Bad - Mutating
const reducer = (state, action) => {
  state.user.name = action.payload;
  return state;
};

// ✅ Good - Redux Toolkit (uses Immer)
reducers: {
  updateName: (state, action) => {
    state.user.name = action.payload;
  };
}

// ✅ Good - Plain Redux if needed
const reducer = (state, action) => {
  return {
    ...state,
    user: { ...state.user, name: action.payload },
  };
};
```

**2. Keep State Flat**

```typescript
// ❌ Bad - Deeply nested
const state = {
  ui: {
    sidebar: {
      isOpen: true,
      activeAccordion: { id: 5 },
    },
  },
};

// ✅ Good - Flat structure
const state = {
  sidebarOpen: true,
  sidebarActiveAccordion: 5,
};
```

**3. Create Selectors**

```typescript
// ✅ Good - Reusable
export const selectTheme = (state: RootState) => state.themeToggle.value;

// Use in components
const theme = useAppSelector(selectTheme);

// ✅ Good - Memoized complex selector
export const selectFilteredItems = createSelector(
  (state: RootState) => state.items,
  (state: RootState) => state.filter,
  (items, filter) => items.filter((item) => matchesFilter(item, filter)),
);

// ❌ Bad - Inline selector (recalculates each render)
const filtered = useAppSelector((state) =>
  state.items.filter((item) => matchesFilter(item, state.filter)),
);
```

**4. Actions Should Be Events**

```typescript
// ✅ Good - Describes what happened
dispatch(userLoggedIn(user));
dispatch(searchQueryChanged(query));
dispatch(sidebarToggled());

// ❌ Bad - Describes how to update state
dispatch(setUserInState(user));
dispatch(updateSearchQuery(query));
dispatch(toggleState());
```

## Testing Requirements

### Minimum Coverage

- **Overall**: 80%+
- **New Features**: 90%+
- **Critical Paths**: 100%
- **Utilities**: 100%

### What To Test

✅ **Test**:

- User interactions (clicks, typing, navigation)
- State changes (Redux actions)
- Error handling
- Edge cases
- Integration between components

❌ **Don't Test**:

- Implementation details
- Third-party libraries
- Internal component state (test through UI)
- Snapshots (avoid unless necessary)

### Test Structure

```typescript
describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should handle click', async () => {
    render(<MyComponent onAction={mockFn} />);
    await userEvent.click(screen.getByRole('button'));
    expect(mockFn).toHaveBeenCalled();
  });

  describe('when prop is X', () => {
    it('should display Y', () => {
      render(<MyComponent data={testData} />);
      expect(screen.getByText('Y')).toBeInTheDocument();
    });
  });
});
```

### Running Tests

```bash
npm test                    # Run all tests
npm test -- --watch        # Watch mode
npm run coverage            # Coverage report
npm test -- MyComponent   # Single component
```

## Performance Guidelines

### Before Committing

- [ ] No console errors/warnings
- [ ] Bundle size analyzed: `npm run build`
- [ ] Lighthouse score >90
- [ ] Components memoized if expensive
- [ ] Selectors memoized if complex
- [ ] No unnecessary re-renders
- [ ] Images optimized
- [ ] No dead code

### Performance Targets

| Metric                   | Target  |
| ------------------------ | ------- |
| First Contentful Paint   | < 1.8s  |
| Largest Contentful Paint | < 2.5s  |
| Cumulative Layout Shift  | < 0.1   |
| Time to Interactive      | < 3.5s  |
| Bundle Size              | < 500KB |

### Optimization Techniques

**Component Memoization**:

```typescript
export const ExpensiveComponent = React.memo(({ data, options }) => {
  return <Chart series={data} options={options} />;
});

ExpensiveComponent.displayName = 'ExpensiveComponent';
```

**Lazy Loading**:

```typescript
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('../features/dashboard'));

{
  path: 'dashboard',
  element: (
    <Suspense fallback={<LoadingSpinner />}>
      <Dashboard />
    </Suspense>
  )
}
```

**Selector Memoization**:

```typescript
import { createSelector } from "@reduxjs/toolkit";

export const selectVisibleItems = createSelector(
  [(state: RootState) => state.items],
  (items) => items.filter((item) => item.visible),
);
```

## Accessibility & UX

### Required

✅ **Semantic HTML**

```typescript
// ✅ Good
<nav>
  <ul>
    <li><a href="/dashboard">Dashboard</a></li>
  </ul>
</nav>

// ❌ Bad
<div className="navbar">
  <div className="item" onClick={() => {}} >Dashboard</div>
</div>
```

✅ **ARIA Labels**

```typescript
// ✅ Good
<button aria-label="Open sidebar">☰</button>
<div role="alert">{error}</div>

// ❌ Bad
<button>☰</button>
```

✅ **Keyboard Navigation**

```typescript
// ✅ Good - Focusable elements
<button>Action</button>
<input type="text" />
<a href="/">Link</a>

// ❌ Bad - Non-interactive element
<div onClick={handleClick}>Action</div>
```

✅ **Color Contrast**

- WCAG AA: 4.5:1 minimum for text
- Test with tools like WebAIM or axe

✅ **Responsive Design**

- Test at: 320px, 768px, 1024px, 1280px
- Mobile-first approach
- No horizontal scrolling

## Documentation Requirements

### Code Comments

**Write Comments For**:
✅ Why (not what)  
✅ Complex algorithms  
✅ Non-obvious decisions  
✅ Browser quirks/workarounds

**Don't Comment For**:
❌ What the code does (should be obvious)  
❌ Trivial operations  
❌ Every single line

```typescript
// ✅ Good - Explains why
// Memoize to prevent re-renders when parent changes
export const Chart = React.memo(({ data }) => {
  return <ApexChart series={data} />;
});

// ✅ Good - Explains non-obvious logic
// Handle both space and click for keyboard accessibility
const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === ' ' || e.key === 'Enter') {
    handleAction();
  }
};

// ❌ Bad
// Set x to 5
x = 5;

// ❌ Bad
// Map over items
items.map(item => item.id);
```

### Component Documentation

**JSDoc Comments**:

```typescript
/**
 * Displays a dashboard card with statistics
 *
 * @param title - The card title
 * @param value - The numeric value to display
 * @param icon - Optional icon component
 * @param status - Color status: 'green' for positive, 'red' for negative
 *
 * @example
 * <Card title="Revenue" value={1000} status="green" />
 */
export const Card: React.FC<CardProps> = ({ title, value, icon, status }) => {
  // ...
};
```

### README Updates

When making changes that affect:

- Setup/installation
- Configuration
- Architecture
- New major features

Update corresponding documentation files.

## Code Review Checklist

### Before Submitting PR

- [ ] Branch created from `main`
- [ ] Conventional commit messages
- [ ] No conflicts with `main`
- [ ] All tests pass: `npm test`
- [ ] Coverage maintained/improved
- [ ] No ESLint errors: `npm run lint`
- [ ] TypeScript strict: `npm run build`
- [ ] Components are type-safe
- [ ] No console errors/warnings
- [ ] No hardcoded values
- [ ] No commented code
- [ ] Accessibility checked
- [ ] Mobile responsive
- [ ] Documentation updated
- [ ] PR description complete

### During Review

**Reviewer Should Check**:

- [ ] Code follows guidelines
- [ ] Logic is sound
- [ ] No unnecessary complexity
- [ ] Performance maintained
- [ ] Tests are adequate
- [ ] No security issues
- [ ] Documentation clear
- [ ] No breaking changes

## Deployment Guidelines

### Pre-Deployment Checklist

- [ ] All tests passing: `npm test`
- [ ] Build successful: `npm run build`
- [ ] No TypeScript errors: `npm run build`
- [ ] No ESLint warnings: `npm run lint`
- [ ] Bundle size analyzed
- [ ] Performance metrics acceptable
- [ ] Staging environment tested
- [ ] Browser compatibility verified
- [ ] Mobile tested
- [ ] Dark mode verified
- [ ] All features verified
- [ ] No console errors

### Versioning

Follow Semantic Versioning:

```
MAJOR.MINOR.PATCH
x.y.z

MAJOR: Breaking changes
MINOR: New features (backward compatible)
PATCH: Bug fixes
```

### Rollback Procedure

```bash
# In case of critical issues
git revert <commit-hash>
npm run build
# Deploy reverted version
```

---

**These guidelines ensure code quality, maintainability, and team consistency.**

_Last Updated: February 2026_
