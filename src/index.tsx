import * as React from "react";
import * as ReactDOM from "react-dom";

import './helpers/css-variables.css';

import CurrencyConverter from "./components/currency-converter";

ReactDOM.render(
    <CurrencyConverter />,
    document.getElementById("root")
);