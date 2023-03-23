import './App.css';
import './common-styles.css';
import {Home} from "./components/commonsDomain/Home";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {MountainRoutes} from "./components/routesDomain/MountainRoutes";
import {LoginPage} from "./components/commonsDomain/LoginPage";
import {RegisterPage} from "./components/commonsDomain/RegisterPage";
import {Forecast} from "./components/forecastDomain/Forecast";
import {UserProfile} from "./components/usersDomain/UserProfile";
import {RouteDetails} from "./components/routesDomain/RouteDetails";
import {getUserData} from "./api/util.js";
import {UsersAll} from "./components/usersDomain/UsersAll";
import {AddRoutePage} from "./components/routesDomain/AddRoutePage";
import {EditRoutePage} from "./components/routesDomain/EditRoutePage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/routes/all" component={MountainRoutes}/>
                    <Route path="/routes/add" component={AddRoutePage}/>
                    <Route path="/routes/edit" component={EditRoutePage}/>
                    <Route path="/routes/:id" component={RouteDetails}/>
                    <Route path="/weather/:mountain/:mountain_location/:numberOfDays" component={Forecast}/>
                    <Route path="/users/register" component={RegisterPage}/>
                    <Route path="/users/login" component={LoginPage}/>
                    {
                        !!getUserData()
                            ? <>
                                <Route path="/users/me" component={UserProfile}/>
                                <Route path="/users/all" component={UsersAll}/>
                            </>
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
