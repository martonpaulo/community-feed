import { parseText } from "./textParser";
import type { FragmentType } from "../types/fragmentType";

describe("parseText", () => {
  it("should parse plain text", () => {
    const input = "This is a plain text.";
    const expected: FragmentType[][] = [
      [{ type: "text", value: "This is a plain text." }],
    ];
    expect(parseText(input)).toEqual(expected);
  });

  it("should parse hashtags", () => {
    const input = "This is a #hashtag.";
    const expected: FragmentType[][] = [
      [
        { type: "text", value: "This is a" },
        { type: "hashtag", value: "#hashtag." },
      ],
    ];
    expect(parseText(input)).toEqual(expected);
  });

  it("should parse mentions", () => {
    const input = "Hello @user!";
    const expected: FragmentType[][] = [
      [
        { type: "text", value: "Hello" },
        { type: "mention", value: "@user!" },
      ],
    ];
    expect(parseText(input)).toEqual(expected);
  });

  it("should parse links", () => {
    const input = "Check this out: https://example.com";
    const expected: FragmentType[][] = [
      [
        { type: "text", value: "Check this out:" },
        { type: "link", value: "https://example.com" },
      ],
    ];
    expect(parseText(input)).toEqual(expected);
  });

  it("should handle mixed content", () => {
    const input = "Hello @user, check this out: https://example.com #awesome";
    const expected: FragmentType[][] = [
      [
        { type: "text", value: "Hello" },
        { type: "mention", value: "@user," },
        { type: "text", value: "check this out:" },
        { type: "link", value: "https://example.com" },
        { type: "hashtag", value: "#awesome" },
      ],
    ];
    expect(parseText(input)).toEqual(expected);
  });

  it("should handle multiple lines", () => {
    const input = "Hello @user\nCheck this out: https://example.com\n#awesome";
    const expected: FragmentType[][] = [
      [
        { type: "text", value: "Hello" },
        { type: "mention", value: "@user" },
      ],
      [
        { type: "text", value: "Check this out:" },
        { type: "link", value: "https://example.com" },
      ],
      [{ type: "hashtag", value: "#awesome" }],
    ];
    expect(parseText(input)).toEqual(expected);
  });
});
