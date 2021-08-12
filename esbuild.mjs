import { GasPlugin } from "esbuild-gas-plugin"
import * as esbuild from "esbuild"

esbuild.build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    outfile: "build/main.js",
    plugins: [GasPlugin]
}).catch(() => process.exit(1))
