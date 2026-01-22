/**
 * PROBLEM: Cell Growth Simulation
 *
 * You are given a 2D grid where each cell contains a non-negative integer
 * representing its "growth level".
 *
 * In one simulation step:
 * - Each cell with value >= 2 will "spread" growth to its adjacent cells
 *   (up, down, left, right - NOT diagonals)
 * - Adjacent cells receive +1 growth
 * - All updates happen simultaneously (use the state from the beginning of the step)
 *
 * Return the grid after performing K simulation steps.
 *
 * CONSTRAINT: You must handle grids of any size (not just 3x3)
 *
 * Example:
 * Input: grid = [[0,1,0],
 *                [0,3,0],
 *                [0,1,0]], k = 1
 *
 * Output: [[0,2,0],
 *          [1,3,1],
 *          [0,2,0]]
 *
 * @param {number[][]} grid - The initial grid state
 * @param {number} k - Number of simulation steps
 * @return {number[][]} - Grid after k steps
 */

function simulateCellGrowth(grid, k) {
  // Your implementation here
}

module.exports = simulateCellGrowth;
