import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import RoomNoteContainer from "../roomNote";
import ChooseRoomContainer from "../chooseRoom";
import {routeName} from '../constants';

const RootRouter = () => (
    <BrowserRouter>
        <div className="app">
           <h1>notes</h1>
            <ChooseRoomContainer/>
            <Switch>
                <Route exact path={`/${routeName.ROOM}/:${routeName.ID}`} component={RoomNoteContainer}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default RootRouter;
