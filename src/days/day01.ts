import { readLines } from "../utils/input";

const year = 2025;
const day = 1;

const lines = readLines(year, day);

let dial = 50
let zeros = 0
for (const line of lines) {
    let diff = line[0] === 'R' ? Number(line.slice(1)) : -Number(line.slice(1))
    dial += diff
    dial = (dial + 100) % 100
    if (dial === 0) zeros++
}

console.log("total zeros: ", zeros)