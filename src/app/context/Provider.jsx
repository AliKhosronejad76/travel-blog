"use client";
import DrawerProvider from "./DrawerProvider";

export default function Provider({children}){
    return(
        <DrawerProvider>
            {children}
        </DrawerProvider>
    );
}