const simulateCellGrowth = require("./solution");

function arraysEqual(arr1, arr2) {
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (!arr1[i] || !arr2[i]) return false;
    if (arr1[i].length !== arr2[i].length) return false;
    for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] !== arr2[i][j]) return false;
    }
  }
  return true;
}

function runTest(testNum, grid, k, expected) {
  const gridCopy = grid.map((row) => [...row]);

  let result;
  try {
    result = simulateCellGrowth(gridCopy, k);
  } catch (error) {
    console.log(`Test ${testNum}: ✗ FAIL (Error: ${error.message})`);
    return false;
  }

  if (!result) {
    console.log(`Test ${testNum}: ✗ FAIL (Function returned ${result})`);
    return false;
  }

  const passed = arraysEqual(result, expected);
  console.log(`Test ${testNum}: ${passed ? "✓ PASS" : "✗ FAIL"}`);

  if (!passed) {
    console.log("  Input:", JSON.stringify(grid), `k=${k}`);
    console.log("  Expected:", JSON.stringify(expected));
    console.log("  Got:     ", JSON.stringify(result));
  }

  return passed;
}

console.log("Running Cell Growth Simulation Tests...\n");

let passed = 0;
let total = 0;

// Test 1: Basic single step (3x3)
total++;
if (
  runTest(
    1,
    [
      [0, 1, 0],
      [0, 3, 0],
      [0, 1, 0],
    ],
    1,
    [
      [0, 2, 0],
      [1, 3, 1],
      [0, 2, 0],
    ],
  )
)
  passed++;

// Test 2: Multiple steps (3x3) - CORRECTED
// Step 0: [[0,0,0],[0,2,0],[0,0,0]]
// Step 1: (1,1)=2 spreads → [[0,1,0],[1,2,1],[0,1,0]]
// Step 2: (1,1)=2 spreads → [[0,2,0],[2,2,2],[0,2,0]]
total++;
if (
  runTest(
    2,
    [
      [0, 0, 0],
      [0, 2, 0],
      [0, 0, 0],
    ],
    2,
    [
      [0, 2, 0],
      [2, 2, 2],
      [0, 2, 0],
    ],
  )
)
  passed++;

// Test 3: No spreading (all values < 2)
total++;
if (
  runTest(
    3,
    [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
    1,
    [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
  )
)
  passed++;

// Test 4: Multiple sources (3x3) - CORRECTED
// All 4 corners have value 2 and spread simultaneously
// Each edge cell receives growth from 2 corners
total++;
if (
  runTest(
    4,
    [
      [2, 0, 2],
      [0, 0, 0],
      [2, 0, 2],
    ],
    1,
    [
      [2, 2, 2],
      [2, 0, 2],
      [2, 2, 2],
    ],
  )
)
  passed++;

// Test 5: Single cell (1x1)
total++;
if (runTest(5, [[5]], 3, [[5]])) passed++;

// Test 6: Chain reaction (3x3) - CORRECTED
// Step 0: [[0,0,0],[0,3,0],[0,0,0]]
// Step 1: (1,1)=3 spreads → [[0,1,0],[1,3,1],[0,1,0]]
// Step 2: (1,1)=3 spreads → [[0,2,0],[2,3,2],[0,2,0]]
// Step 3: (1,1)=3 and 4 neighbors with >=2 all spread → [[2,3,2],[3,7,3],[2,3,2]]
total++;
if (
  runTest(
    6,
    [
      [0, 0, 0],
      [0, 3, 0],
      [0, 0, 0],
    ],
    3,
    [
      [2, 3, 2],
      [3, 7, 3],
      [2, 3, 2],
    ],
  )
)
  passed++;

// Test 7: Larger grid (4x4) - CORRECTED
// 4 cells with value 2 each spread to their neighbors
// Inner cells receive growth from multiple sources
total++;
if (
  runTest(
    7,
    [
      [0, 0, 0, 0],
      [0, 2, 2, 0],
      [0, 2, 2, 0],
      [0, 0, 0, 0],
    ],
    1,
    [
      [0, 1, 1, 0],
      [1, 4, 4, 1],
      [1, 4, 4, 1],
      [0, 1, 1, 0],
    ],
  )
)
  passed++;

// Test 8: k = 0 (no steps)
total++;
if (
  runTest(
    8,
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    0,
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
  )
)
  passed++;

// Test 9: Horizontal rectangle (2x4) - CORRECTED
// (0,1)=2 spreads to (0,0), (0,2), and (1,1)
total++;
if (
  runTest(
    9,
    [
      [0, 2, 0, 0],
      [0, 0, 0, 0],
    ],
    1,
    [
      [1, 2, 1, 0],
      [0, 1, 0, 0],
    ],
  )
)
  passed++;

// Test 10: Vertical rectangle (4x2)
total++;
if (
  runTest(
    10,
    [
      [0, 0],
      [2, 0],
      [0, 0],
      [0, 0],
    ],
    1,
    [
      [1, 0],
      [2, 1],
      [1, 0],
      [0, 0],
    ],
  )
)
  passed++;

console.log(`\n${"=".repeat(40)}`);
console.log(`Results: ${passed}/${total} tests passed`);
console.log(`${"=".repeat(40)}`);

if (passed === total) {
  console.log("🎉 All tests passed! Great job!");
  process.exit(0);
} else {
  console.log(`⚠️  ${total - passed} test(s) failed. Keep debugging!`);
  process.exit(1);
}
