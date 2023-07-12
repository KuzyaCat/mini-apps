// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const H = grid.length;
    const W = grid[0].length;

    const dfs = (x, y) => {
        if (x >= W || x < 0 || y >= H || y < 0 || grid[y][x] === '0') {
            return;
        }
        grid[y][x] = '0';

        dfs(x + 1, y);
        dfs(x - 1, y);
        dfs(x, y + 1);
        dfs(x, y - 1);
    };

    let count = 0;
    for (let i = 0; i < H; i += 1) {
        for (let j = 0; j < W; j += 1) {
            if (grid[i][j] === '1') {
                count += 1;
                dfs(j, i);
            }
        }
    }

    return count;
};
