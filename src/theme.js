import { createTheme, Paper } from "@mui/material";

const lightPallete = {
  mode : 'light',
  primary : {
      main : "#7C3AED",
  },
  background : {
    default : '#f7f7f7'
  },
  text : {
    primary : "#171010"
  }
}
const darkPallete = {
  mode : 'dark',
  primary : {
      main : "#7C3AED",
  },
  background : {
    default : '#171010',
    paper:"#1e1e1e"
  },
  text : {
    primary : "#f7f7f7"
  }
}

export const getTheme = (mode)=>{
  return createTheme ({
    palette:mode === 'light' ? lightPallete : darkPallete,
  })
}

