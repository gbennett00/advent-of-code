import { readLines, toRange } from "../utils/input";

const year = 2025;
const day = 5;

const lines = readLines(year, day);

const blank = lines.findIndex(l => l.length === 0)
const ranges = lines.slice(0, blank).map(toRange)
const ids = lines.slice(blank+1).map(Number)

console.log(ids.filter(id => isFresh(id)).length)

function isFresh(id: number) {
    for (const range of ranges) {
        const start = range[0]
        const end = range[1]
        if (!start || !end) continue
        if (id >= start && id <= end) return true
    }
    return false
}