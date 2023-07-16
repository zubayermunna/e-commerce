import { createTheme, } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: '#94B49F',
      },
      secondary: {
        main: '#ECB390', 
      },

      customColor: {
        light: '#CEE5D0',
        main: '#F44336',
        dark: '#B71C1C',
      },
     font:{
        primary:"#fff",secondary:"#000",olive:"#94B49F"
     },
    },
  });

export default theme