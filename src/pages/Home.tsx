import React, {FC} from 'react';
import Header from "../components/Header";
import {observer} from "mobx-react-lite";

const Home: FC = () => {
    return (
        <div className="h-screen bg-gray-100">
            <Header/>
        </div>
    );
};

export default observer(Home);