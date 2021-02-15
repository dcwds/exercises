# Count IP Addresses

This is a [Codewars](https://codewars.com) algorithm exercise, ranked as `5 kyu`, where `kyu` ranks 1-8 are in order of difficulty, `1 kyu` being the most difficult.

[View on Codewars](https://codewars.com/kata/526989a41034285187000de4)

# Summary

Receive two IPv4 addresses as inputs and return the number of addresses between them (including the first, excluding the last). Assume all inputs are valid IPv4 strings and that the last address is greater than the first.

### Examples

```js
ipsBetween("10.0.0.0", "10.0.0.50") === 50
ipsBetween("10.0.0.0", "10.0.1.0") === 256
```

## What I Learned

- [Bitwise operators can be quite useful. Thanks Reddit.](https://www.reddit.com/r/learnprogramming/comments/23or7e/eli5_bitwise_arithmetic_shifting/cgz41io) Spoiler: they weren't used in my solution.

## Other Solutions

My solution is quite similar to some of the more popular solutions, however this one caught my eye:

```js
function ipsBetween(start, end) {
  start = start.split(".")

  return end.split(".").reduce(function (sum, x, i) {
    return (sum << 8) + Number(x) - Number(start[i])
  }, 0)
}
```

Where I used a strategy to map the IP sub-block indices to an array of integers via `n*256`, where `n` is `65536, 256, 1, 0`, this solution instead uses the left-shift operator `sum << 8` which can be read as `sum * (2 ** 8)`. Perhaps this opens a discussion about readability but it is helpful to see different permutations of one concept.
