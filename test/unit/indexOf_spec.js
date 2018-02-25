const indexOf = require("../../src");
const chai = require("chai");
const expect = chai.expect;

describe("indexOf", () => {

    before("setup alternative indexOf", () => {
        String.prototype.indexOf2 = function ( substring, fromIndex ) {
            return indexOf( this.toString(), substring, fromIndex );
        };
    });

    after("setup alternative indexOf", () => {
        String.prototype.indexOf2 = undefined;
    });

    it("should return fromIndex if the substring to search is empty and fromIndex >= 0 and fromIndex <= string.length", () => {
        const string = "hello",
            substring = "";
        const expected = 0;

        expect( string.indexOf2( substring) ).to.eql( expected );
    });

    it("should return 0 if fromIndex < 0 and substring is empty", () => {
        const string = "hello",
            substring = "",
            fromIndex = -1;
        const expected = 0;

        expect( string.indexOf2( substring, fromIndex ) ).to.eql( expected );
    });

    it("should return string.length if fromIndex > string.length and substring is empty", () => {
        const string = "hello",
            substring = "",
            fromIndex = 8;
        const expected = 5;

        expect( string.indexOf2( substring, fromIndex ) ).to.eql( expected );
    });

    it("should search for a substring, within the given string and return its index", () => {
        const string = "helka hella",
            substring = "hella";
        const expected = 6;

        expect( string.indexOf2( substring) ).to.eql( expected );
    });

    it("should return -1 if it cannot find a matching substring withing the string", () => {
        const string = "hello",
            substring = "ol";
        const expected = -1;

        expect( string.indexOf2( substring) ).to.eql( expected );
    });

    it("should return -1 if substring is greater than string", () => {
        const string = "hello",
            substring = "hello!";
        const expected = -1;

        expect( string.indexOf2( substring) ).to.eql( expected );
    });

    it("should return 0 if substring is the same as string", () => {
        const string = "hello",
            substring = "hello";
        const expected = 0;

        expect( string.indexOf2( substring) ).to.eql( expected );
    });

    it("should receive a fromIndex parameter and start searching from there (inclusive)", () => {
        const string = "hello",
            substring = "lo",
            fromIndex = 2;
        const expected = 3;

        expect( string.indexOf2( substring, fromIndex) ).to.eql( expected );
    });

    it("should return -1 if fromIndex > string.length", () => {
        const string = "hello",
            substring = "lo",
            fromIndex = 6;
        const expected = -1;

        expect( string.indexOf2( substring, fromIndex) ).to.eql( expected );
    });
});
