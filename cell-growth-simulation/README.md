# Cell Growth Simulation - DSA Assessment

**Time Limit:** 45 minutes

---

## 📋 Problem

Given a 2D grid where each cell contains a non-negative integer representing its "growth level", simulate K growth steps where:

- Cells with value ≥ 2 spread growth (+1) to adjacent cells (up, down, left, right - NOT diagonals)
- All updates happen simultaneously (use grid state from beginning of step)
- Return the grid after K steps

**Constraint:** Must handle grids of any size, not just 3x3.

---

## 🚀 Quick Start

```bash
npm install
npm test
```

Implement `simulateCellGrowth()` in `solution.js` until all 10 tests pass.

---

## 📝 Example

```javascript
Input: ((grid = [
  [0, 1, 0],
  [0, 3, 0],
  [0, 1, 0],
]),
  (k = 1));

Output: [
  [0, 2, 0],
  [1, 3, 1],
  [0, 2, 0],
];
```

**Explanation:** Cell at (1,1) with value 3 spreads +1 growth to all 4 adjacent cells. The cell itself remains 3.

---

## 🧪 Test Coverage

- **Tests 1-3:** Basic 3x3 grids
- **Test 4:** Multiple spreading sources
- **Test 5:** Single cell (1x1)
- **Test 6:** Chain reaction over multiple steps
- **Test 7:** Larger grid (4x4)
- **Test 8:** Zero steps (k=0)
- **Tests 9-10:** Non-square grids

---

## 💡 Approach Hints

<details>
<summary>Click for hints (try solving first!)</summary>

### Algorithm Outline

```
For each of k steps:
  1. Create a "growth" matrix (same size as grid, initialized to 0)
  2. For each cell in current grid:
     - If cell value >= 2:
       - Add +1 to growth matrix for each valid adjacent cell
  3. Create next grid by adding growth to current grid values
  4. Set current grid = next grid
```

### Key Insights

- **Simultaneous updates:** Use a separate growth tracking matrix
- **Boundaries:** Check if adjacent cells are within grid bounds
- **Directions array:** `[[-1,0], [1,0], [0,-1], [0,1]]` for up/down/left/right

### Common Mistakes

- ❌ Modifying grid while reading it (breaks simultaneity)
- ❌ Including diagonal neighbors
- ❌ Not handling non-square grids
- ❌ Source cells changing their own value

</details>

---

## ✅ Submission Checklist

- [ ] All 10 tests passing (`npm test`)
- [ ] Handles any grid size (not just 3x3)
- [ ] Simultaneous updates working correctly
- [ ] Clean, readable code with good variable names
- [ ] No AI tools used

---

## 🎯 What We Evaluate

1. **Correctness** (60%): All tests pass, edge cases handled
2. **Code Quality** (25%): Clean structure, good naming, readability
3. **Efficiency** (15%): Optimal time/space complexity

**Expected Complexity:**

- Time: O(k × m × n) where m×n is grid size
- Space: O(m × n) for grid copy

---

## 📜 Rules

**❌ Prohibited:**

- AI tools (ChatGPT, Copilot, Claude, etc.)
- Copying solutions from internet
- Pre-built implementations

**✅ Allowed:**

- Google for JavaScript syntax
- MDN documentation
- Your own notes

---

## 💡 Tips

- **Read carefully:** Understand the simultaneous update requirement
- **Trace by hand:** Walk through Example with pen and paper
- **Test incrementally:** Run tests after each change
- **Check boundaries:** Grid edges are common bug sources
- **Time management:** 10 min planning, 30 min coding, 5 min testing

---

Good luck! 🚀
