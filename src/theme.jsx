import { createTheme } from "@mui/material/styles";

const getTheme = (mode)=>{
    return createTheme({
    
    spacing:4,
    palette:{
        mode:mode,
        primary:{
            main:'#ff0000'
        }
    },
    typography:{
        h2:{
            fontSize:'3rem'
        }
    }
});
}

export default getTheme;

