import { createContext, useState } from "react";

export const InitialContext = createContext();

export function InitialContextProvider({children}) {
    const [inputValues, setInputValues] = useState({
        name: '',
        family: '',
        date_of_brith: '',
        age: '',
        size: '',
        id: 0,
      })
    return(
        <InitialContext.Provider value={{inputValues,setInputValues}} >
            {children}
        </InitialContext.Provider>
    )
}