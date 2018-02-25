## What is `indexOf` ?

`indexOf` is my personal implementation of the `String.prototype.indexOf` function, but with a few micro-optimizations to increase performance.
Do note that although this function will be faster than the original `indexOf` for small strings, for large enough string the original will eventually outperform it.

## Why should I use it ?

If you are using a browser from the past century that does not support the new ECMA6 [`includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) ( *cough cough IE users* ) and you know the majority of the strings you wish to compare will not have a size large enough to warrant the efficient usage of the native function, this is for you then.

How do you know if your strings will be of the right size? Well, my advice is for you to test both functions and compare: https://jsperf.com/

## API

This function's API is designed to compatible with the native API:

 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Switching between implementations should be transparent as both functions have the same interface.

## Usage

To make it perfectly clear **I do not support this function as a total replacement of the original**. It is always a good idea to keep both.
So, in case you wish to use it, you can adapt the following code snippet to your liking:

    //require, import, whataver you use: indexOf
    String.prototype.myIndexOf = function( substring, fromIndex ){
        return indexOf( this.toString(), substring, fromIndex );
    }

    "hello world".myIndexOf( "world", 3 );
