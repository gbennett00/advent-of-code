import { readGrid } from "../utils/input";

const year = 2025;
const day = 4;

const grid = readGrid(year, day);

const xLen = grid.length
const yLen = grid[0]?.length ?? 0

let accessible = 0
for (let x = 0; x < xLen; x++) {
    for (let y = 0; y < yLen; y++) {
        if (isPaper(x, y) && isAccessible(x, y)) accessible++
    }
}
console.log(accessible)

function isAccessible(x: number, y: number) {
    let surroundingCount = 0
    for (let i = x-1; i <= x+1; i++) {
        if (i < 0 || i >= xLen) continue
        for (let j = y-1; j <= y+1; j++) {
            if (j < 0 || j >= yLen || (j == y && i == x)) continue
            if (isPaper(i, j)) surroundingCount++
        }
    }
    return surroundingCount < 4
}

function isPaper(x: number, y: number) {
    const row = grid[x]
    if (row === undefined) return false
    return row[y] === '@'
}