# Path Finder

This is a [Codewars](https://codewars.com) algorithm exercise, ranked as `4 kyu`, where `kyu` ranks 1-8 are in order of difficulty, `1 kyu` being the most difficult.

[View on Codewars](https://www.codewars.com/kata/5765870e190b1472ec0022a2)

## Summary

You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return `true` if you can reach position [N-1, N-1] or `false` otherwise.

Empty positions are marked `.` and walls are marked `W`. Start and exit positions are empty in all test cases.

Example input:

```
.W.
.W.
...
```

## What I Learned

- It's easy to complicate how the input is consumed. Initially, I created a 2D array from the input, replacing every occurrence of `.` with a unique integer and all occurrences of `W` with `-1`. Later, I determined that because every position is unique, I can use its indicies as an identifier, allowing me to consume the input as a 1D array.

- Different data structures serve different purposes and being aware of them and their differences is important. My implementation tracks visited nodes with a `Set` as it performers better than an `Array` in this case, which is what I used initially before I had bothered optimizing. In retrospect, I could simply fill visited nodes with `W` so that they are ignored when computing neighbors.

- Working out the algorithm strategy through psuedo-code is far more efficient than getting lost in implementation details when the problem isn't entirely understood.
