import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import RoomMessageContainer from "../roomNote";
import ChooseRoomContainer from "../chooseRoom";
import {routeName} from '../constants';

const RootRouter = () => (
    <BrowserRouter>
        <div className="app">
           <h1>notes</h1>
            <ChooseRoomContainer/>
            <Switch>
                <Route exact path={`/${routeName.ROOM}/:${routeName.ID}`} component={RoomMessageContainer}/>
            </Switch>
            <div className="flexwrap">
                <div className="note">
                    <h3>Theme</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium ad aliquid amet architecto aut culpa debitis
                        dignissimos dolorem dolorum ducimus eaque eos error eveniet
                        expedita explicabo facilis in itaque iure magnam minima molestias
                        nesciunt nobis pariatur porro praesentium quaerat quasi quibusdam,
                        repellendus, sed sint suscipit tempore voluptatibus voluptatum! Animi,
                        numquam.</p>
                    <p className="date">{Date.now()}</p>
                </div>
                <div className="note">
                    <h3>Theme</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium ad aliquid amet architecto aut culpa debitis
                        dignissimos dolorem dolorum ducimus eaque eos error eveniet
                        expedita explicabo facilis in itaque iure magnam minima molestias
                        nesciunt nobis pariatur porro praesentium quaerat quasi quibusdam,
                        repellendus, sed sint suscipit tempore voluptatibus voluptatum! Animi,
                        numquam.</p>
                    <p className="date">22.07.2018</p>
                </div>
                <div className="note">
                    <h3>Theme</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium ad aliquid amet architecto aut culpa debitis
                        dignissimos dolorem dolorum ducimus eaque eos error eveniet
                        expedita explicabo facilis in itaque iure magnam minima molestias
                        nesciunt nobis pariatur porro praesentium quaerat quasi quibusdam,
                        repellendus, sed sint suscipit tempore voluptatibus voluptatum! Animi,
                        numquam.</p>
                    <p className="date">22.07.2018</p>
                </div>
                <div className="note">
                    <h3>Theme</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium ad aliquid amet architecto aut culpa debitis
                        dignissimos dolorem dolorum ducimus eaque eos error eveniet
                        expedita explicabo facilis in itaque iure magnam minima molestias
                        nesciunt nobis pariatur porro praesentium quaerat quasi quibusdam,
                        repellendus, sed sint suscipit tempore voluptatibus voluptatum! Animi,
                        numquam.</p>
                    <p className="date">22.07.2018</p>
                </div>

            </div>
        </div>
    </BrowserRouter>
);

export default RootRouter;
