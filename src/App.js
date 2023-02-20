import './App.css';
import {Home} from "./Components/Home";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {MountainRoutes} from "./Components/MountainRoutes";
import {LoginPage} from "./Components/LoginPage";
import {RegisterPage} from "./Components/RegisterPage";
import {Forecast} from "./Components/Forecast";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/routes/all" component={MountainRoutes}/>
                    <Route path="/weather/" component={Forecast}/>
                    <Route path="/users/register" component={RegisterPage}/>
                    <Route path="/users/login" component={LoginPage}/>
                    <Route path="/logout">
                        <Redirect to="/"/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
