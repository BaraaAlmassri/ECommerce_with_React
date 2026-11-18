import { createTheme } from "@mui/material";

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
  mode : 'light',
  primary : {
      main : "#7C3AED",
  },
  background : {
    default : '#171010'
  },
  text : {
    primary : "#f7f7f7"
  }
}

export const getTheme = (mode)=>{
  return createTheme ({
    palette:mode === 'light' ? darkPallete : lightPallete
  })
}

