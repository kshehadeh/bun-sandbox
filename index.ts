import { parseFileSync } from "@swc/core";

const parsed = parseFileSync("index.ts", {
    syntax: "typescript",    
    target: "esnext"
});

console.log(parsed)
