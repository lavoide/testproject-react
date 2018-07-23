import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserNoteContainer from "../userNote";
import ChooseRoomContainer from "../chooseUser";
import {routeName} from '../constants';


const RootRouter = () => (
    <BrowserRouter>
        <div className="app">
           <h1>notes</h1>
            <ChooseRoomContainer/>
            <Switch>
                <Route exact path={`/${routeName.USER}/:${routeName.ID}`} component={UserNoteContainer}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default RootRouter;
