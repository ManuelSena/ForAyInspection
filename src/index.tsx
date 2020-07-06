﻿import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppRouter } from "../src/router";
import './css/site.css';

ReactDOM.render(
    <AppRouter />,
    document.getElementById("root")
);