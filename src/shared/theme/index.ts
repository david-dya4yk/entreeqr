export const theme = {
  colors: {
    white: "#fff",
    black: "#000",
    gray50: "#f9fafb",
    gray100: "#f2f4f7",
    gray200: "#eaecf0",
    gray300: "#d0d5dd",
    gray400: "#98a2b3",
    gray500: "#667085",
    gray600: "#475467",
    gray700: "#344054",
    primary: "#444ce7",
    titanWhite: "#e1e3ff",
    mystic: "#e1e5ef",
  },
  transition: {
    needToReplace: "0.3s all",
    base: "0.3s",
  },
  fonts: {
    makesans500: {
      fontFamily: "MakeSans, sans-serif",
      fontWeight: 500,
      fontSize: 58,
      lineHeight: 1.05,
    },
    makesans500_28: {
      fontFamily: "MakeSans, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.25,
    },
    caveatHand32: {
      fontFamily: "Caveat, sans-serif",
      fontWeight: 400,
      fontSize: 32,
      lineHeight: 1,
    },
    caveatHand28: {
      fontFamily: "Caveat, sans-serif",
      fontWeight: 400,
      fontSize: 28,
      lineHeight: 1,
    },
    itt500H96: {
      fontFamily: "InterTight, sans-serif",
      fontWeight: 500,
      fontSize: 96,
      lineHeight: 1.1,
    },
    itt500H64: {
      fontFamily: "InterTight, sans-serif",
      fontWeight: 500,
      fontSize: 64,
      lineHeight: 1.05,
    },
    it500H64: {
      fontWeight: 500,
      fontSize: 64,
      lineHeight: 1.05,
    },
    it500H48: {
      fontWeight: 500,
      fontSize: 48,
      lineHeight: 1.05,
    },
    itt500H48: {
      fontFamily: "InterTight, sans-serif",
      fontWeight: 500,
      fontSize: 48,
      lineHeight: 1.05,
    },
    it500H40: {
      fontWeight: 500,
      fontSize: 40,
      lineHeight: 1.05,
    },
    it500H32: {
      fontWeight: 500,
      fontSize: 32,
      lineHeight: 1.1,
    },
    itt500H32: {
      fontFamily: "InterTight, sans-serif",
      fontWeight: 500,
      fontSize: 32,
      lineHeight: 1.1,
    },
    it500H2: {
      fontWeight: 500,
      fontSize: 28,
      lineHeight: 1.1,
    },
    it500H20: {
      fontWeight: 500,
      fontSize: 20,
      lineHeight: 1.25,
    },
    itt400H28: {
      fontFamily: "InterTight, sans-serif",
      fontWeight: 400,
      fontSize: 28,
      lineHeight: 1.1,
    },
    it400H28: {
      fontWeight: 400,
      fontSize: 28,
      lineHeight: 1.1,
    },
    itt500H24: {
      fontFamily: "InterTight, sans-serif",
      fontWeight: 500,
      fontSize: 24,
      lineHeight: 1.1,
    },
    it500H96: {
      fontWeight: 500,
      fontSize: 96,
      lineHeight: 1.1,
    },
    it500H28: {
      fontWeight: 500,
      fontSize: 28,
      lineHeight: 1.1,
    },
    it500H24: {
      fontWeight: 500,
      fontSize: 24,
      lineHeight: 1.1,
    },
    it500H23: {
      fontWeight: 500,
      fontSize: 23,
      lineHeight: 1.1,
    },
    it400H24: {
      fontWeight: 400,
      fontSize: 24,
      lineHeight: 1.1,
    },
    it400H20: {
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.25,
    },
    inter500Ag24: {
      fontWeight: 500,
      fontSize: 24,
      lineHeight: 1.25,
    },
    inter400Ag22: {
      fontWeight: 400,
      fontSize: 22,
      lineHeight: 1.15,
    },
    inter500Ag22: {
      fontWeight: 500,
      fontSize: 22,
      lineHeight: 1.15,
    },
    inter400Ag20: {
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.1,
    },
    inter500Ag20: {
      fontWeight: 500,
      fontSize: 20,
      lineHeight: 1.25,
    },
    inter500Ag18: {
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.1,
    },
    inter400Ag18: {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.1,
    },
    inter600Ag16: {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.25,
    },
    inter600Ag28: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: 1.25,
    },
    inter500Ag16: {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.25,
    },
    inter400Ag16: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.25,
    },
    inter600Ag14: {
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.1,
    },
    inter500Ag14: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.1,
    },
    inter400Ag14: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.1,
    },
    inter500Ag12: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.25,
    },
    inter600Ag12: {
      fontWeight: 600,
      fontSize: 12,
      lineHeight: 1.25,
    },
    inter400Ag12: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 1.25,
    },
  },
};

export type FontVariant = keyof MyTheme["fonts"];

export type ColorsType = keyof MyTheme["colors"];

export type MyTheme = typeof theme;
