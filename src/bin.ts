#!/usr/bin/env node
import commander from "commander";
import dependencyPath from "./";
import { readFileSync } from "fs";
import { join } from "path";
commander.usage("[dependency] dependency to analyze");
commander.description("Get path to package.json for identified dependency");
commander.option(
  "-w --working-path <path>",
  "Working path for node package to examine",
  "."
);
commander.action(() => {
  process.chdir(commander.workingPath);
  let args: string[] = commander.args;
  //   console.log(arg);
  //   return;
  if (!args.length) {
    //Get current package.json
    const { dependencies, devDependencies } = JSON.parse(
      readFileSync(join(process.cwd(), "package.json"), { encoding: "utf-8" })
    );
    //Do them all
    args = Object.keys({ ...(dependencies || {}), ...(devDependencies || {}) });
  }
  const arr = args.map((arg) => {
    const path = dependencyPath(arg);
    return { key: arg, path };
  });

  const obj = arr.reduce((o, { key, path }) => ({ ...o, [key]: path }), {});
  process.stdout.write(JSON.stringify(obj, null, 2));
});
commander.parse(process.argv);
export { commander };
