import { existsSync } from "fs";
import { join, resolve } from "path";
/**
 * Get the path to a node dependency, traversing up the tree as expected
 * @internal
 * @param key Identifier of the node package to find
 * @param cwd Context for working directory (changes with recursive calls)
 */
export function dependencyPath(
  key: string,
  cwd: string = process.cwd()
): string {
  if (existsSync(join(cwd, "node_modules", key)))
    return join(cwd, "node_modules", key);
  else if (cwd !== resolve(cwd, ".."))
    return dependencyPath(key, resolve(cwd, ".."));
  else throw "Could not find dependency " + key;
}
export default dependencyPath;
