import { extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";
const { Select } = chakraTheme.components;

const theme = extendBaseTheme({
  colors: {
    darkGrey: "#272727",
  },
  components: {
    Select,
  },
});

export default theme;
