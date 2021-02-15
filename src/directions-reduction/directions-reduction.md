# Directions Reduction

This is a [Codewars](https://codewars.com) algorithm exercise, ranked as `5 kyu`, where `kyu` ranks 1-8 are in order of difficulty, `1 kyu` being the most difficult.

[View on Codewars](https://codewars.com/kata/550f22f4d758534c1100025a)

## Summary

Given the following directions as input:

```
["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
```

Eliminate any sequences that are direct opposites, e.g. `NORTH SOUTH, SOUTH NORTH, EAST WEST, WEST EAST`. Also, be sure to check for direct opposites _after_ having eliminated a direct opposite pair.

```
["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
["SOUTH", "EAST", "WEST", "NORTH", "WEST"]
["SOUTH", "NORTH", "WEST"]
["WEST"]
```

Given our input, we should receive `["WEST"]` as our output.

## What I Learned

- Regular expressions are a great tool and I plan to continue learning how to write them.
- Changing the type of the input (`Array` -> `String`) can make parsing easier.
- While it is true that the `space` between `NORTH SOUTH` (for example) is useful for human-readability, it's an unnecessary complexity within the algorithm.

## Other Solutions

This solution is quite similar to my own:

```js
function dirReduc(arr) {
  var str = arr.join(""),
    pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/
  while (pattern.test(str)) str = str.replace(pattern, "")
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || []
}
```

As I mentioned in _What I Learned_, the input is joined without spaces and the regex pattern contains no spaces between directions. This avoids having to perform additional operations to remove and trim leftover spaces when we make replacements on our input, unlike the following strategy in my solution:

```js
dirsStr.replace(oppositesRegex, "").replace(/\s\s+/g, " ").trim()
```
