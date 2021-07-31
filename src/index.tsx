import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import AuthStore from "./store/auth";
import UserStore from "./store/user";

interface Store {
    authStore: AuthStore
    userStore: UserStore
}

const authStore = new AuthStore()
const userStore = new UserStore()

export const Context = createContext<Store>({
    authStore,
    userStore
})

ReactDOM.render(
    <Context.Provider value={{authStore, userStore}}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);
