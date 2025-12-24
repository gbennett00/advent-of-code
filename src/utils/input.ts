import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function dayPath(year: number, day: number) {
  const dd = String(day).padStart(2, "0");
  return resolve(process.cwd(), "inputs", String(year), `day${dd}.txt`);
}

export function readInput(year: number, day: number): string {
  return readFileSync(dayPath(year, day), "utf8").trimEnd();
}

export function readLines(year: number, day: number): string[] {
  return readInput(year, day).split(/\r?\n/);
}

export function readRanges(year: number, day: number): number[][] {
  return readInput(year, day).split(',').map(i => i.split('-').map(Number))
}