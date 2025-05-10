// themes.ts
import * as stylex from "@stylexjs/stylex";
import { colors } from "./globalTokens.stylex";

export const light = stylex.createTheme(colors, {
    foregroundR: "101",
    foregroundG: "104",
    foregroundB: "108",

    bgStartR: "214",
    bgStartG: "219",
    bgStartB: "220",

    bgEndR: "214",
    bgEndG: "219",
    bgEndB: "220",

    bgSecondaryR: "255",
    bgSecondaryG: "255",
    bgSecondaryB: "255",

    bgAltR: "226",
    bgAltG: "229",
    bgAltB: "233",

    bgAltHoverR: "213",
    bgAltHoverG: "216",
    bgAltHoverB: "220",

    primaryR: "8",
    primaryG: "102",
    primaryB: "255",

    blackWhiteR: "8",
    blackWhiteG: "8",
    blackWhiteB: "9",

    dangerR: "239",
    dangerG: "68",
    dangerB: "68",

    borderR: "187",
    borderG: "189",
    borderB: "193",

    shadowR: "0",
    shadowG: "0",
    shadowB: "0",
});

export const dark = stylex.createTheme(colors, {
    foregroundR: "176",
    foregroundG: "179",
    foregroundB: "184",

    bgStartR: "28",
    bgStartG: "28",
    bgStartB: "29",

    bgEndR: "28",
    bgEndG: "28",
    bgEndB: "29",

    bgSecondaryR: "37",
    bgSecondaryG: "39",
    bgSecondaryB: "40",

    bgAltR: "59",
    bgAltG: "61",
    bgAltB: "62",

    bgAltHoverR: "78",
    bgAltHoverG: "80",
    bgAltHoverB: "80",

    primaryR: "8",
    primaryG: "102",
    primaryB: "255",

    blackWhiteR: "226",
    blackWhiteG: "229",
    blackWhiteB: "233",

    dangerR: "239",
    dangerG: "68",
    dangerB: "68",

    borderR: "101",
    borderG: "104",
    borderB: "108",

    shadowR: "0",
    shadowG: "0",
    shadowB: "0",
});
