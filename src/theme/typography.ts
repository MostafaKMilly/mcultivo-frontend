import { TypographyOptions } from "@mui/material/styles/createTypography";

export const PRIMARY_FONT = "Lato , sans-serif";
export const SECONDRY_FONT = "Public Sans , sans-serif";
export const THIRD_FONT = "Inter , sans-serif";

const typography: TypographyOptions = {
  fontFamily: PRIMARY_FONT,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  allVariants: {
    letterSpacing: 0,
  },
  h1: {
    fontFamily: PRIMARY_FONT,
    fontWeight: "bold",
    fontSize: 24,
  },

  h2: {
    fontFamily: PRIMARY_FONT,
    fontWeight: "bold",
    fontSize: 20,
  },
  h3: {
    fontFamily: PRIMARY_FONT,
    fontWeight: 600,
    fontSize: 16,
  },
  h4: {
    fontFamily: PRIMARY_FONT,
    fontWeight: "bold",
    fontSize: 12,
  },
  body1: {
    fontFamily: PRIMARY_FONT,
    fontWeight: 500,
    fontSize: 16,
  },
  body2: {
    fontFamily: PRIMARY_FONT,
    fontWeight: 400,
    fontSize: 14,
  },
  button: {
    fontFamily: PRIMARY_FONT,
    fontWeight: 500,
    fontSize: 12,
  },
};

export default typography;
