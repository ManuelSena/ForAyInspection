import * as React from "react";
import { Header } from "./components/header/header";

export const App: React.StatelessComponent<{}> = (props) => {

    return (
        <div className="container">
            <Header />
            {props.children}
        </div>
    );

}