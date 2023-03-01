import './App.css';
import './common-styles.css';
import {Home} from "./Components/Home";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {MountainRoutes} from "./Components/MountainRoutes";
import {LoginPage} from "./Components/LoginPage";
import {RegisterPage} from "./Components/RegisterPage";
import {Forecast} from "./Components/Forecast";
import {UserProfile} from "./Components/UserProfile";

function App() {
    return (
        <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/routes/all" component={MountainRoutes}/>
                        <Route path="/weather/:mountain/:mountain_location/:numberOfDays" component={Forecast}/>
                        <Route path="/users/register" component={RegisterPage}/>
                        <Route path="/users/login" component={LoginPage}/>
                        <Route path="/users/me" component={UserProfile}/>
                        <Route path="/users/logout">
                            <Redirect to="/"/>
                        </Route>
                    </Switch>
                </BrowserRouter>
        </div>
    );
}

export default App;
