import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {NavBar} from "./ui-elements/Navbar";
import {Container} from "reactstrap";
import {TodosPage} from "./pages/TodosPage";
import {HomePage} from "./pages/HomePage";


library.add(fas);

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <NavBar/>
            <Container>
                <Switch>
                    <Route component={HomePage} path="/" exact/>
                    <Route component={TodosPage} path="/todos"/>
                </Switch>
            </Container>
        </BrowserRouter>
    )
};

export default App;
