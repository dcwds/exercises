# Iterative Rotation Cipher

This is a [Codewars](https://codewars.com) algorithm exercise, ranked as `5 kyu`, where `kyu` ranks 1-8 are in order of difficulty, `1 kyu` being the most difficult.

[View on Codewars](https://www.codewars.com/kata/5a3357ae8058425bde002674)

## Summary

Create an object with two methods: `encode` and `decode`. The `encode` method receives a positive integer `n` and a string value as arguments. The `decode` method receives a string value as an argument.

### Encoding

1. Remove all spaces in the string and remember their positions.
2. Shift the order of characters in the new string to the right by `n` characters.
3. Put the spaces back in their original positions.
4. Shift the characters of each substring (separated by one or more consecutive spaces) to the right by `n`.

Repeat these steps `n` times. Afterward, prepend `n` followed by a space to the result.

### Decoding

Reverse the encoding process.

## What I Learned

This exercise didn't offer many learning opportunities. However, a performance consideration is to remove the `encode` boolean parameter and conditionals from the functions and instead split the functions into "do left" and "do right" operations.
