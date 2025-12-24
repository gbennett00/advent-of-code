import { readInput, readRanges } from "../utils/input";

const year = 2025;
const day = 2;

const ranges = readRanges(year, day);

let sum = 0
for (const range of ranges) {
    const start = range[0] ?? 0
    const end = range[1] ?? 0
    for (let i = start; i <= end; i++) {
        if (isInvalidID(i)) sum += i
    }
}

console.log("sum: ", sum)

function isInvalidID(num: number) {
    const str = String(num)
    const centerIdx = str.length / 2
    for (let i = 1; i <= centerIdx; i++) {
        if (str.length % i !== 0) continue

        const first = str.slice(0, i)
        let isInvalid = true
        for (let j = i; j < str.length; j += i) {
            const next = str.slice(j, j+i)
            if (first !== next) {
                isInvalid = false;
                break;
            }
        }
        if (isInvalid) return true
    }
    return false
}
