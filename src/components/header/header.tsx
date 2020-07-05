import * as React from "react";
import { Link } from "react-router";

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <div>
            <Link to="/home" className="btn btn-primary">Home</Link>
        </div>
    );
}