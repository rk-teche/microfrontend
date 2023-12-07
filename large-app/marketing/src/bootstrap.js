import React from "react";
import ReactDom from "react-dom";
import App from "./App";

const mount = (ele) => 
{
    ReactDom.render(
        <>
            <App />
        </>,
        ele);
};


if (process.env.NODE_ENV === "development")
{
    const ele = document.querySelector("#_marketing-element");

    if (ele)
        mount(ele);
}

export 
{
    mount
};