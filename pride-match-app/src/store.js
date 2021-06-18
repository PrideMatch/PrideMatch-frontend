import React, {useState} from 'react';

const initialState = {
    isLoggedIn: false,
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