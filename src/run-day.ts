const [dayArg, yearArg] = process.argv.slice(2);
const day = Number(dayArg);
const year = Number(yearArg ?? new Date().getFullYear());

if (!day || day < 1 || day > 25) {
  console.error("Usage: npm run day -- <day> [year]");
  process.exit(1);
}

const dd = String(day).padStart(2, "0");
await import(`./${year}/day${dd}.ts`);
