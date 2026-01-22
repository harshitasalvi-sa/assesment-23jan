# Task Manager - React Assessment

**Time Limit:** 2.5 hours

---

## 📋 Problem

Build a Trello-style task management app demonstrating React expertise:

- React Router (multi-page SPA)
- Context API + useReducer
- Custom hooks
- Performance optimization
- LocalStorage persistence

---

## 🚀 Quick Start

```bash
npm install
npm start        # CRA
# OR
npm run dev      # Vite

# Test production build
npm run build
```

---

## ✅ Required Features

### 1. Task Board (45 min)

- Three columns: To Do, In Progress, Done
- Display tasks in respective columns
- Move tasks between columns
- Show title, description, status per task

### 2. CRUD Operations (50 min)

**Add Task (20 min)**

- Form with title (required, 3-50 chars) and description (optional)
- Default status: To Do
- Clear form after submission

**Edit Task (20 min)**

- Click task to edit (modal or inline)
- Update title/description
- Save/cancel functionality

**Delete Task (10 min)**

- Delete button with confirmation dialog

### 3. Search & Filter (20 min)

- Search bar (filter by title, real-time)
- Filter dropdown (All/To Do/In Progress/Done)
- Display count of visible tasks

### 4. State Management (40 min)

**TaskContext (25 min)**

- Manage all tasks globally
- Use useReducer for state logic
- Actions: ADD_TASK, UPDATE_TASK, DELETE_TASK, MOVE_TASK

**ThemeContext (15 min)**

- Light/Dark mode toggle
- Use useReducer
- Persist theme preference

### 5. Routing (20 min)

- `/` - Task board (home)
- `/add` - Add task page
- `/tasks/:id` - Task detail page
- `/about` - About page
- `/*` - 404 Not Found

### 6. Custom Hook (15 min)

- `useLocalStorage(key, initialValue)`
- Save tasks and theme to localStorage
- Load on app start

### 7. Performance (20 min)

- `React.memo()` on TaskCard component
- `useMemo()` for filtered/searched tasks
- `useCallback()` for event handlers
- No unnecessary re-renders

### 8. UI/UX (20 min)

- Responsive (mobile/tablet/desktop)
- Empty states ("No tasks yet")
- Loading states (if needed)
- Clean, intuitive interface
- Theme toggle in navbar

---

## 📁 Required Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── TaskCard.jsx         (use React.memo)
│   ├── TaskForm.jsx
│   ├── SearchBar.jsx
│   ├── ThemeToggle.jsx
│   └── ConfirmDialog.jsx
├── pages/
│   ├── Home.jsx             (task board)
│   ├── AddTask.jsx
│   ├── TaskDetail.jsx
│   ├── About.jsx
│   └── NotFound.jsx
├── context/
│   ├── TaskContext.jsx      (useReducer)
│   └── ThemeContext.jsx     (useReducer)
├── hooks/
│   └── useLocalStorage.js
├── App.jsx                  (routing setup)
└── App.css
```

---

## 🎨 Design Reference

### Task Card Layout

```
┌─────────────────────────────┐
│ Task Title            [Edit]│
│                             │
│ Description text...         │
│                             │
│ Status: To Do         [Move]│
│                      [Delete]│
└─────────────────────────────┘
```

### Board Layout

```
┌──────────────────────────────────────────┐
│  [Search]  [Filter: All ▼]  [Theme ☀/🌙] │
├──────────────────────────────────────────┤
│  To Do     │  In Progress  │    Done     │
│ ┌────────┐ │  ┌────────┐   │  ┌────────┐ │
│ │ Task 1 │ │  │ Task 3 │   │  │ Task 5 │ │
│ └────────┘ │  └────────┘   │  └────────┘ │
│ ┌────────┐ │               │             │
│ │ Task 2 │ │               │             │
│ └────────┘ │               │             │
└──────────────────────────────────────────┘
```

---

## 🧪 Testing Checklist

### Functionality

- [ ] All 5 routes work
- [ ] Add task with validation
- [ ] Edit task
- [ ] Delete task with confirmation
- [ ] Move task between columns
- [ ] Search filters in real-time
- [ ] Filter dropdown works
- [ ] Task count updates correctly

### Persistence

- [ ] Tasks persist after refresh
- [ ] Theme persists after refresh
- [ ] Works after browser restart

### Performance

- [ ] No console errors
- [ ] Smooth interactions
- [ ] No lag when typing
- [ ] TaskCard doesn't re-render unnecessarily

### Responsive

- [ ] Mobile (≤768px)
- [ ] Tablet (768-1024px)
- [ ] Desktop (≥1024px)

---

## 🚀 Deploying to Vercel

### CLI Method

```bash
npm i -g vercel
vercel --prod
```

### Dashboard Method

1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repo
3. Framework: React (auto-detected)
4. Build Command: `npm run build`
5. Output Directory: `dist` (Vite) or `build` (CRA)
6. Deploy

---

## 💡 Implementation Hints

<details>
<summary>Click for starter code structure</summary>

### Task Object Schema

```javascript
{
  id: 'uuid',
  title: 'Task title',
  description: 'Task description',
  status: 'todo' | 'in-progress' | 'done',
  createdAt: Date.now()
}
```

### TaskContext Setup

```javascript
const initialState = {
  tasks: [],
  filter: "all",
  searchTerm: "",
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id ? action.payload : t,
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };
    case "MOVE_TASK":
    // Similar logic
    default:
      return state;
  }
};
```

### useLocalStorage Hook

```javascript
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
```

### Performance Optimization Example

```javascript
// Memoized TaskCard
export default React.memo(TaskCard);

// Filtered tasks with useMemo
const filteredTasks = useMemo(() => {
  return tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm);
    const matchesFilter = filter === "all" || task.status === filter;
    return matchesSearch && matchesFilter;
  });
}, [tasks, searchTerm, filter]);

// Event handler with useCallback
const handleDelete = useCallback(
  (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  },
  [dispatch],
);
```

</details>

---

## ✅ Submission Checklist

### Code

- [ ] All core features implemented
- [ ] TaskContext + ThemeContext with useReducer
- [ ] useLocalStorage custom hook
- [ ] React.memo, useMemo, useCallback used
- [ ] All 5 routes functional
- [ ] Responsive design
- [ ] No console errors

### Deployment

- [ ] App deployed to Vercel
- [ ] Live URL works
- [ ] All features work in production

### Documentation

- [ ] Clear commit messages
- [ ] README updated with live URL
- [ ] Screenshots included (optional but recommended)

---

## 🎯 Time Management Strategy

- **Setup & Routing:** 20 min
- **TaskContext:** 25 min
- **Task Board UI:** 45 min
- **Add/Edit Forms:** 40 min
- **Search/Filter:** 20 min
- **ThemeContext:** 15 min
- **Performance Optimization:** 20 min
- **Styling & Responsiveness:** 20 min
- **Deployment:** 10 min

**Total:** 2h 35min (includes 5min buffer)

---

## 📜 Rules

**❌ Prohibited:**

- AI tools (ChatGPT, Copilot, etc.)
- UI libraries (Material-UI, Ant Design)
- External state management (Redux, Zustand)
- Component libraries

**✅ Allowed:**

- React built-in hooks
- React Router
- CSS frameworks (Tailwind, Bootstrap)
- Official documentation
- Google for syntax

---

## 💡 Tips for Success

### Architecture

- Set up routing and contexts first
- Build UI structure before adding logic
- Test each feature incrementally

### Common Pitfalls

- Forgetting to wrap App with Context Providers
- Not using keys properly in lists
- Skipping boundary checks
- Over-complicating state logic
- Not testing on mobile

### Performance

- Don't optimize prematurely
- Add React.memo/useMemo after basic functionality works
- Check React DevTools Profiler for unnecessary renders

### Debugging

- Use React DevTools to inspect component tree
- Check localStorage in Application tab
- Console.log reducer actions to debug state

---

## 📚 Resources

- [React Documentation](https://react.dev/)
- [React Router Docs](https://reactrouter.com/)
- [useReducer Hook](https://react.dev/reference/react/useReducer)
- [Context API Guide](https://react.dev/learn/passing-data-deeply-with-context)
- [Vercel Deployment](https://vercel.com/docs)

---

Good luck! 🚀
