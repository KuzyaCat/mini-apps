// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.
// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.
// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const H = heights.length;
    const W = heights[0].length;

    const pacific = new Set();
    const atlantic = new Set();

    function dfs(x, y, prevHeight, set) {
        if (x < 0 || x >= W || y < 0 || y >= H) {
            return;
        }

        const height = heights[y][x];
        if (height < prevHeight) {
            return; // Water can't flow from this cell into the previous cell.
        }

        const index = x + y * W;

        if (set.has(index)) {
            return;
        }
        set.add(index);

        dfs(x + 1, y, height, set);
        dfs(x - 1, y, height, set);
        dfs(x, y + 1, height, set);
        dfs(x, y - 1, height, set);
    }

    // Pacific
    for (let i = 0; i < W; i += 1) {
        dfs(i, 0, 0, pacific); // top row
    }
    for (let i = 0; i < H; i += 1) {
        dfs(0, i, 0, pacific); // left colunm
    }
    // Atlantic
    for (let i = 0; i < W; i += 1) {
        dfs(i, H - 1, 0, atlantic); // bottom
    }
    for (let i = 0; i < H; i += 1) {
        dfs(W - 1, i, 0, atlantic); // right
    }

    const result = [];
    for (const index of pacific) {
        if (atlantic.has(index)) {
            const x = index % W;
            const y = Math.floor(index / W);
            result.push([y, x]);
        }
    }

    return result;
};
