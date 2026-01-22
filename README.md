# Full-Stack Development Assessment

Two programming challenges testing your problem-solving skills, DSA knowledge, and React development abilities.

**Total Time:** 3 hours 15 minutes

---

## 📁 Problems

1. **[cell-growth-simulation/](./cell-growth-simulation/)** - Grid simulation algorithm (45 min)
2. **[task-manager/](./task-manager/)** - Task management platform (2.5 hours)

---

## 🚀 Quick Start

### Prerequisites

- Node.js v14+
- npm or yarn
- Git
- GitHub account
- Vercel account (free)

### Setup

1. **Fork and clone this repository**

```bash
git clone https://github.com/YOUR_USERNAME/fullstack-assessment.git
cd fullstack-assessment
```

2. **Complete Part 1** (45 min)

```bash
cd cell-growth-simulation
npm install
npm test
# Implement solution.js until all tests pass
```

3. **Complete Part 2** (2.5 hours)

```bash
cd ../task-manager
npm install
npm start  # or npm run dev for Vite
npm run build  # Test production build
```

4. **Deploy to Vercel**

```bash
npm i -g vercel
cd task-manager
vercel --prod
```

---

## ⚠️ Assessment Rules

### ❌ NO AI TOOLS ALLOWED

**Prohibited:**

- ChatGPT, Claude, Gemini, or any AI chatbots
- GitHub Copilot or AI code completion
- AI debugging/generation tools

**Allowed:**

- ✅ Official documentation (React, MDN, etc.)
- ✅ Google for syntax lookups
- ✅ Stack Overflow (reading only)
- ✅ Your own notes/previous work

### 🎖️ Honor Code

By submitting, you confirm all code is your own work without AI assistance.

---

## 🤝 Getting Help

**Try these first:**

1. Read documentation
2. Debug using console.log / DevTools
3. Search for error messages

**When to ask seniors:**

- Clarification on requirements
- Setup issues (npm errors)
- Understanding test cases

**Never ask for:**

- Solution approaches
- Algorithm explanations
- Code review during assessment

---

## 📝 Submission

### Create Pull Request (Both Problems Together)

1. **Verify completion:**
   - Part 1: All 10 tests passing
   - Part 2: All features implemented and deployed

2. **Commit and push:**

```bash
git add .
git commit -m "Complete full-stack assessment"
git push origin main
```

3. **Create PR on GitHub:**
   - Title: `Solution: [Your Name] - Full-Stack Assessment`
   - Use template below

---

## 📋 Pull Request Template

```markdown
## 👤 Candidate Information

**Name:** [Your Full Name]

---

## 🌐 Live Deployment

**Task Manager:** [https://your-app.vercel.app](https://your-app.vercel.app)

---

## ✅ Part 1: Cell Growth (45 min)

- [x] All 10 tests passing
- [x] Handles any grid size
- [x] O(k × m × n) time complexity

**Approach:**
[Describe your algorithm in 2-3 sentences]

---

## ✅ Part 2: Task Manager (2.5 hours)

### Core Features

- [x] Task board (To Do, In Progress, Done)
- [x] CRUD operations (Add, Edit, Delete)
- [x] Search & filter
- [x] Task count display

### State Management

- [x] TaskContext with useReducer
- [x] ThemeContext with useReducer
- [x] useLocalStorage custom hook

### Routing (5 pages)

- [x] `/` - Home
- [x] `/add` - Add task
- [x] `/tasks/:id` - Task detail
- [x] `/about` - About
- [x] `/*` - 404

### Performance

- [x] React.memo on TaskCard
- [x] useMemo for filtered tasks
- [x] useCallback for handlers

### UI/UX

- [x] Responsive (mobile/tablet/desktop)
- [x] Light/Dark theme toggle
- [x] LocalStorage persistence

**Tech Stack:** React 18, React Router 6, [CSS approach], [CRA/Vite]

**Key Decisions:**
[2-3 bullet points on architecture choices]

---

## 🖼️ Screenshots

### Desktop - Light Mode

![Light](screenshots/light.png)

### Desktop - Dark Mode

![Dark](screenshots/dark.png)

### Mobile View

![Mobile](screenshots/mobile.png)

---

## 🐛 Known Limitations

[List any incomplete features or known issues]

---

## 📋 Final Checklist

### Part 1

- [ ] All 10 tests passing
- [ ] Works for any grid size
- [ ] Clean, readable code

### Part 2

- [ ] All core features work
- [ ] All 5 routes functional
- [ ] TaskContext + ThemeContext implemented
- [ ] useLocalStorage hook created
- [ ] Search & filter working
- [ ] Performance optimizations applied
- [ ] Responsive design
- [ ] Theme persists
- [ ] Tasks persist in localStorage
- [ ] Deployed to Vercel
- [ ] No console errors in production

---

## ⏱️ Time Breakdown

- Part 1: [X] minutes
- Part 2: [X] hours [X] minutes
- Total: [X] hours [X] minutes

---

## 🔐 Honor Code Statement

I confirm that I completed this assessment without using any AI tools. All code is my original work.

**Signature:** [Your Name]
**Date:** [Submission Date]
```

---

## 🔍 Evaluation Criteria

### Part 1: Cell Growth (40 points)

- **Correctness** (25 pts): All tests pass, handles edge cases
- **Code Quality** (10 pts): Clean, readable, well-structured
- **Efficiency** (5 pts): Optimal complexity

### Part 2: Task Manager (60 points)

- **Functionality** (25 pts): All features work, deployed successfully
- **React Concepts** (15 pts): Proper hooks, Context, routing usage
- **Code Quality** (10 pts): Organization, naming, reusability
- **Performance** (5 pts): Memoization, optimized renders
- **UI/UX** (5 pts): Responsive, intuitive, polished

**Bonus** (+10 pts): Exceptional quality, extra features, excellent docs

---

## ❓ FAQ

**Q: Can I use TypeScript?**  
A: Yes.

**Q: CRA or Vite?**  
A: Either works. Vite is faster.

**Q: Can't finish in time?**  
A: Submit what you have. Partial credit given.

**Q: Can I add extra features?**  
A: Only after completing core requirements.

**Q: What if Vercel fails?**  
A: Include error logs in PR. Code will still be reviewed.

**Q: Can I use Tailwind/CSS frameworks?**  
A: Yes, any CSS approach is allowed.

**Q: Can I use Material-UI or component libraries?**  
A: No, build with vanilla React components.

**Q: Need unit tests for Part 2?**  
A: No, manual testing only.

**Q: How is the live site evaluated?**  
A: Manual testing of all features, responsiveness check, console error check.

---

## 📚 Allowed Resources

**✅ You CAN use:**

- [React Docs](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [MDN](https://developer.mozilla.org/)
- Google for syntax
- Stack Overflow (reading)
- Your own notes

**❌ You CANNOT use:**

- Any AI tools
- GitHub solutions
- Code generators
- Help from others

---

## 💡 Tips for Success

### Time Management

- Part 1: Spend first 10 min understanding, 30 min coding, 5 min testing
- Part 2: Plan structure (20 min), build features (1.5 hrs), polish UI (40 min), deploy (20 min)

### Part 1 Strategy

1. Read problem carefully
2. Trace through examples manually
3. Identify the pattern
4. Code incrementally
5. Test frequently

### Part 2 Strategy

1. Set up routing first
2. Build Context providers
3. Create basic UI structure
4. Implement CRUD operations
5. Add search/filter
6. Apply performance optimizations
7. Test responsiveness
8. Deploy and verify

### Common Pitfalls to Avoid

- Not reading requirements fully
- Skipping edge cases
- Over-engineering solutions
- Leaving console.log statements
- Not testing on mobile
- Forgetting to deploy
- Incomplete documentation

---

## 🎯 What Makes a Strong Submission

### Code Quality

- Clean, consistent formatting
- Meaningful names
- Proper component structure
- No unused code
- Comments where needed

### Functionality

- All features work as expected
- Handles edge cases gracefully
- No bugs or errors
- Smooth user experience

### Performance

- No unnecessary re-renders
- Optimized list rendering
- Fast load times

### Documentation

- Clear PR description
- Explains key decisions
- Lists known limitations
- Professional presentation

---

Good luck! 🚀

**Remember:** We value problem-solving approach and clean code over perfect solutions. Show your best work!
