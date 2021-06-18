import React, {useState, useEffect} from 'react';

const initialState = {
    isLoggedIn: false,
    isRegistered: false,
    name: "",
    email: "",
    profilePicture: "",
    sessionToken: ""
}

const userRegistration = {
    email: "",
    password: "",
    firstTime: true,
    googleFill: false,
    completed: false
}

export const LoadStateFromLocal = (setState) => {

    const data = localStorage.getItem("userState"); // userState = local variable of saved state

    useEffect(() => {
        const handleLoadFromLocal = () => {
            if (data) {
                setState(JSON.parse(data));
            }
        }
        handleLoadFromLocal()
    }, [])
    
}   

export const SaveStateToLocal = (state) => {
    localStorage.setItem("userState", JSON.stringify(state))
}



export const Context = React.createContext(initialState);
export const LoginContext = React.createContext(userRegistration);
const Store = ({children}) => {
    const [state, setState] = useState(initialState);
    const [userState, setUserState] = useState(userRegistration)
    
    return (
        <Context.Provider value={{state, setState}}>
            <LoginContext.Provider value={{userState, setUserState}}>
                {children}
            </LoginContext.Provider>
        </Context.Provider>
    );
};

export default Store;