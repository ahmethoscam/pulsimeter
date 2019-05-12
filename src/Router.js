import React from "react";
import Login from "./screens/Login";
import signUp from "./screens/signup";
import HomeScreen from "./screens/homescreen";
import patientRecord from "./screens/patientRecord";
import ActionRecords from "./screens/ActionRecords";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";

class MasterApp extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (


            <Router>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route  path="/Login" component={Login} />
                    <Route path="/signUp" component={signUp} />
                    <Route path="/ActionRecords" component={ActionRecords} />
                    <Route  path="/patientRecord" component={patientRecord} />

                </Switch>
            </Router>

        );
    }
}

export default MasterApp;
