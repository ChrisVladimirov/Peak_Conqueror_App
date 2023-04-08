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
import {PicturesPage} from "./components/picturesDomain/PicturesPage";
import {CreatePicturePage} from "./components/picturesDomain/CreatePicturePage";
import {EditPicturePage} from "./components/picturesDomain/EditPicturePage";
import {ErrorPage} from "./components/commonsDomain/ErrorPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/routes/all" component={MountainRoutes}/>
                    <Route path="/routes/create" component={AddRoutePage}/>
                    <Route path="/routes/:routeId/edit" component={EditRoutePage}/>
                    <Route path="/routes/:id" component={RouteDetails}/>
                    <Route path="/weather/:mountain/:mountain_location/:numberOfDays" component={Forecast}/>
                    <Route path="/users/register" component={RegisterPage}/>
                    <Route path="/users/login" component={LoginPage}/>
                    <Route path="/pictures/all" exact component={PicturesPage}/>
                    <Route path="/pictures/create" exact component={CreatePicturePage}/>
                    <Route path="/pictures/:pictureId/edit" component={EditPicturePage}/>
                    <Route path="/users/logout">
                        <Redirect to="/"/>
                    </Route>

                    {!!getUserData()
                        ? <>
                            <Route path="/users/me" component={UserProfile}/>
                            <Route path="/users/all" component={UsersAll}/>
                            <Route path="*">
                                <ErrorPage/>
                            </Route>
                        </>
                        :
                        <>
                            <Route exact={true} path="/users/me">
                                <Redirect to="/users/login"/>
                            </Route>
                            <Route exact={true} path="/users/all">
                                <Redirect to="/users/login"/>
                            </Route>
                            <Route path="*">
                                <ErrorPage/>
                            </Route>
                        </>
                    }
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;