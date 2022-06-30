import { createContext } from "react";

export const NickContext = createContext({})

const NickProvider = ({children}) => {
    const[dados, setDados] = useState(null)

};
return(
    <NickContext.Provider value={{dados , setDados}}>
        {children}
    </NickContext.Provider>
)

export default NickProvider;
