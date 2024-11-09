"use clinet";
import { useState , createContext , useContext } from "react";


const DrawerContext = createContext();

export default function DrawerProvider({children}){
    const [showDrawer , setShowDrawer] = useState(false);
    
    return(
        <DrawerContext.Provider value={{showDrawer,setShowDrawer}}> 
            {children}
        </DrawerContext.Provider>
    );
}

export const useDrawer = ()=>useContext(DrawerContext);