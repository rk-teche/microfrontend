import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import landing from "./component/Landing";
import Pricing from "./component/Pricing";

export default () => 
{
    return (
        <div>
            <StylesProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path="/" component={landing} />
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    );
};