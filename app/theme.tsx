import type { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colors: {
    brand: [
      "#0A0A0A", //0 black,
      "#8690A0", //1 gray,
      "#A17EFF", //2 purple,
      "#844BE0", //3 dark purple,
      "#A17EFF26", //4 light purple,
      "#8690A0", //5 light gray,

      "#D1D5DB", //6 lightest gray,
      "#646F7F", //7 dark gray,
      "#00986E", //8 green,
      "#A17EFF", //9 purple,
      "#844BE0", //10 dark purple,
      "#ffffff", //11 white,
      "#ABB3BE", //12 light gray,
      "#F7F7F8", //13 off-white,
      "#333333", //14
      "#F8FAFB", //15
    ],
  },
  primaryColor: "brand",
  defaultRadius: "md",
  fontFamily: '"DM Sans" , sans-serif',
  radius: {
    xs: "4px",
    sm: "6px",
    md: "8px",
    lg: "12px",
    xl: "16px",
  },
};
