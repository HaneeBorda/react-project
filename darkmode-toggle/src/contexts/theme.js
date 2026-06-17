import React, { createContext, useContext } from 'react'

export const themecontext = createContext({
    themeMode : "light",
    lightTheme: () => {},
    darkTheme : () => {},
})

export const Themprovider = themecontext.Provider

export default function usetheme() {
    return useContext(themecontext)
}