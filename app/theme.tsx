import type { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colors: {
    brand: [
      "#0A0A0A", // black,
      "#8690A0", // gray,
      "#A17EFF", // purple,
      "#844BE0", // dark purple,
      "#A17EFF26", // light purple,
      "#8690A0", // light gray,

      "#D1D5DB", // lightest gray,
      "#646F7F", // dark gray,
      "#00986E", // green,
      "#A17EFF", // purple,
      "#844BE0", // dark purple,
      "#ffffff", // white,
    ],
  },
  primaryColor: "brand",
  defaultRadius: "md",
  fontFamily: '"DM Sans" , sans-serif',
};
