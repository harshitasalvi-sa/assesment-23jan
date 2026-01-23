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
  let row = grid.length;
  let col = grid[0].length;

  //const result = grid.map((row) => [...row]);

    let dx = [1, 0, -1, 0];
    let dy = [0, 1, 0, -1]; 
    

  function updateGrid(grid){
    let copy = grid.map(row => [...row]);
    
    for(let i = 0; i<grid.length; i++){
      for(let j = 0; j<grid[0].length; j++){
        if(grid[i][j] >= 2){
          for(let k = 0; k<4; k++){
            if((i+dx[k] >= 0 && i+dx[k] < row) && (j+dy[k] >= 0 && j+dy[k] < col)){
              // grid[i+dx[k]][j+dy[k]] =  grid[i+dx[k]][j+dy[k]]+1;
              //console.log("Old value = "+grid[i+dx[k]][j+dy[k]]);
              copy[i+dx[k]][j+dy[k]]++;
              //console.log(`At ${i+dx[k]}, ${j+dy[k]}  = `+grid[i+dx[k]][j+dy[k]]);
            }
          }
        }
      }
    }
    return copy;
  }
  
  for(let i = 0; i<k; i++){
    grid = updateGrid(grid);
  }
  return grid;
}

module.exports = simulateCellGrowth;
