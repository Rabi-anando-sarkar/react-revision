import {createContext, } from "react";

export const ChaiContext = createContext({
    title : "chai lover"
});

export const ChaiProvider = ChaiContext.Provider

export default function useChai() {
    return useContext(ChaiContext)
}
