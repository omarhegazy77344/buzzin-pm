import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";
import { withTheme } from "styled-components";

export const tokens =() => ({
  primary: {
    100: "#fdebd6",
    200: "#fbd7ad",
    300: "#f8c483",
    400: "#f6b05a",
    500: "#f49c31",
    600: "#c37d27",
    700: "#925e1d",
    800: "#623e14",
    900: "#311f0a"
  }, 
  secondary: {
    100: "#d2d4d7",
    200: "#a6aab0",
    300: "#797f88",
    400: "#4d5561",
    500: "#202a39",
    600: "#1a222e",
    700: "#131922",
    800: "#0d1117",
    900: "#06080b"
  }, 
  cream: {
    100: "#fffffe",
    200: "#fffefd",
    300: "#fffefd",
    400: "#fffdfc",
    500: "#fffdfb",
    600: "#cccac9",
    700: "#999897",
    800: "#666564",
    900: "#333332"
  }, 
  black: {
    100: "#d0cecd",
    200: "#a09e9b",
    300: "#716d68",
    400: "#413d36",
    500: "#120c04",
    600: "#0e0a03",
    700: "#0b0702",
    800: "#070502",
    900: "#040201"
  }, 
});


export const themeSettings =() =>{
  const colors =tokens();
  return {
    palette:{
      primary:{
        main: colors.primary[500],
      },
      secondary:{
        main:colors.secondary[500],
      },
      neutral:{
        dark:colors.cream[700],
        main:colors.cream[500],
        light:colors.cream[100],
      },
      background:{
        default:  "#fcfcfc",
      },
    },
    typography:{
    fontFamily:["Montserrat", "sans-serif"].join(","),
    fontSize:12,
    h1:{
      fontFamily:["Montserrat", "sans-serif"].join(","),
      fontSize:40,
    },
    h2:{
      fontFamily:["Montserrat", "sans-serif"].join(","),
      fontSize:32,
    },
    h3:{
      fontFamily:["Montserrat", "sans-serif"].join(","),
      fontSize:24,
    },
    h4:{
      fontFamily:["Montserrat", "sans-serif"].join(","),
      fontSize:20,
    },
    h5:{
      fontFamily:["Montserrat", "sans-serif"].join(","),
      fontSize:18,
    },
    h6:{
      fontFamily:["Montserrat", "sans-serif"].join(","),
      fontSize:16,
    },
    },
  };
};

export const Themegiver =()=>{ 
  
  
  const theme= (createTheme(themeSettings()));
  return theme;



}