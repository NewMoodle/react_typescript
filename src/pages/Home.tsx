import React, {FC} from 'react';
import Header from "../components/Header";
import {observer} from "mobx-react-lite";

const Home: FC = () => {
    return (
        <div>
            <Header/>
        </div>
    );
};

export default observer(Home);