export const darkTheme = {
  colors: {
    bg: "#1a1a2e",
    cardBg: "#16213e",
    cardBgSecondary: "#0f3460",
    text: "#ffffff",
    textSecondary: "#a8b2d8",
    accent: "#4fc3f7",
    border: "rgba(255,255,255,0.1)",
  },
};

export const lightTheme = {
  colors: {
    bg: "#e8eaf6",
    cardBg: "#ffffff",
    cardBgSecondary: "#c5cae9",
    text: "#1a1a2e",
    textSecondary: "#546e7a",
    accent: "#1976d2",
    border: "rgba(0,0,0,0.1)",
  },
};

export type ThemeType = typeof darkTheme;