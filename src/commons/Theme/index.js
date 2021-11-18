import { createTheme } from '@mui/material/styles';

const theme = createTheme ({
    color: {
        primary: "#009688",
        secondary: "#B2DFDB",
        error: "#FF5252",
        danger: "#FF6F60"
    },
    typography: {
        fonrFamily: "Roboto"
    },
    shape: {
        borderRadius: 4,
        backgroundColor: "#B2DFDB",
        textColor: "#FFFFFF",
        border: "#009688"
    }
});
export default theme;