import { readLines, toRange } from "../utils/input";

const year = 2025;
const day = 5;

const lines = readLines(year, day);

const blank = lines.findIndex(l => l.length === 0)
const ranges = lines.slice(0, blank).map(toRange).sort((a, b) =>  (a[0] ?? 0) - (b[0] ?? 0))

// combine the ranges
let i = 0
while (i < ranges.length - 1) {
    const a = ranges[i]
    const b = ranges[i+1]
    if (!a || !b) break
    const a1 = a[1] ?? 0
    const b0 = b[0] ?? 0
    if (b0 <= a1) {
        a[1] = Math.max(a1, (b[1] ?? 0))
        ranges.splice(i+1, 1)
    } else {
        i++
    }
}

// count the size of all ranges
let sum = 0
for (const range of ranges) {
    const a = range[0]
    const b = range[1]
    if (!a || !b) continue
    sum += (b - a + 1)
}

console.log(sum)
