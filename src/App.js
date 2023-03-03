import './App.css';
import './common-styles.css';
import {Home} from "./components/Home";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {MountainRoutes} from "./components/MountainRoutes";
import {LoginPage} from "./components/LoginPage";
import {RegisterPage} from "./components/RegisterPage";
import {Forecast} from "./components/Forecast";
import {UserProfile} from "./components/UserProfile";
import {RouteDetails} from "./components/RouteDetails";
import {getUserData} from "./api/util";
import {UsersAll} from "./components/UsersAll";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/routes/all" component={MountainRoutes}/>
                    <Route path="/routes/:id" component={RouteDetails}/>
                    <Route path="/weather/:mountain/:mountain_location/:numberOfDays" component={Forecast}/>
                    <Route path="/users/register" component={RegisterPage}/>
                    <Route path="/users/login" component={LoginPage}/>
                    <Route path="/users/all" component={UsersAll}/>
                    {
                        !!getUserData()
                            ? <Route path="/users/me" component={UserProfile}/>
                            : <Redirect to="/users/login"/>
                    }
                    <Route path="/users/logout">
                        <Redirect to="/"/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
