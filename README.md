
<a name="readmemd"></a>

# dependency-package-path

Find where a dependency is stored - either in `node_modules` below the package, or "hoisted" above. Returns the directory hosting `package.json`.


<a name="__climd"></a>

# Usage
```bash
npx dependency-package-path [options]
```
Get path to package.json for identified dependency
# Options
* -w --working-path \<`path`> Working path for node package to examine (default: `.`)

<a name="_librarymd"></a>


# dependency-package-path - v1.0.0

## Index

### Functions

* [dependencyPath](#dependencypath)

## Functions

###  dependencyPath

▸ **dependencyPath**(`key`: string, `cwd`: string): *string*

*Defined in [index.ts:9](https://github.com/rhdeck/dependency-package-path/blob/4ef507b/src/index.ts#L9)*

Get the path to a node dependency, traversing up the tree as expected

**`internal`** 

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`key` | string | - | Identifier of the node package to find |
`cwd` | string | process.cwd() | Context for working directory (changes with recursive calls)  |

**Returns:** *string*
