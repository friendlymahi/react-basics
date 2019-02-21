import React from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from "./../../sagas";

import workspaceReducer from "./../../reducers/Workspace";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(workspaceReducer, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
sagaMiddleware.run(mySaga)

export default () =>
    <Provider store={store}><h1 class="headline-1 no-padding">Welcome, User</h1>
        <div class="paragraph">Current Balance and Funds Performance Widget</div>
        <div class="paragraph">Actions to complete</div>
        <div class="paragraph">Projections , Being on track, etc Carousel with different CTAs</div>
        <div class="paragraph">Recent 360 Events - Recommended actions</div>
        <div class="paragraph">Recent 360 Events - Info</div>
        <div class="paragraph">Recommended Reading</div>
        <div class="paragraph">Whats new at VALIC?</div>
        <div class="row">

            <div class="col-md-3 col-sm-6">
                <a href="./home-cover-video.html" class="card tall-sm rounded-md text-center bg-gradient-sky">
                    <div class="card-block">
                        <button class="btn .cta">Call To Action</button>
                    </div>
                </a>
            </div>

            <div class="col-md-3 col-sm-6">
                <a href="./dashboard.html" class="card tall-sm rounded-md text-center bg-gradient-sky">
                    <div class="card-block">
                        <h4 class="text-snow1">Dashboard</h4>
                    </div>
                </a>
            </div>

            <div class="col-md-3 col-sm-6">
                <a href="./landing.html" class="card tall-sm rounded-md text-center bg-gradient-sky">
                    <div class="card-block">
                        <h4 class="text-snow1">Landing</h4>
                    </div>
                </a>
            </div>

            <div class="col-md-3 col-sm-6">
                <a href="./informational.html" class="card tall-sm rounded-md text-center bg-gradient-sky">
                    <div class="card-block">
                        <h4 class="text-snow1">Informational</h4>
                    </div>
                </a>
            </div>

            <div class="col-md-3 col-sm-6">
                <a href="./article.html" class="card tall-sm rounded-md text-center bg-gradient-sky">
                    <div class="card-block">
                        <h4 class="text-snow1">Article</h4>
                    </div>
                </a>
            </div>

            <div class="col-md-3 col-sm-6">
                <a href="./about.html" class="card tall-sm rounded-md text-center bg-gradient-sky">
                    <div class="card-block">
                        <h4 class="text-snow1">About</h4>
                    </div>
                </a>
            </div>

            <div class="col-md-3 col-sm-6">
                <a href="./news.html" class="card tall-sm rounded-md text-center bg-gradient-sky">
                    <div class="card-block">
                        <h4 class="text-snow1">News</h4>
                    </div>
                </a>
            </div>

            <div class="col-md-3 col-sm-6">
                <a href="./contact.html" class="card tall-sm rounded-md text-center bg-gradient-sky">
                    <div class="card-block">
                        <h4 class="text-snow1">Contact</h4>
                    </div>
                </a>
            </div>

            <div class="col-md-3 col-sm-6">
                <a href="./signin.html" class="card tall-sm rounded-md text-center bg-gradient-sky">
                    <div class="card-block">
                        <h4 class="text-snow1">Sign In</h4>
                    </div>
                </a>
            </div>

            <div class="col-md-3 col-sm-6">
                <a href="./404.html" class="card tall-sm rounded-md text-center bg-gradient-sky">
                    <div class="card-block">
                        <h4 class="text-snow1">404</h4>
                    </div>
                </a>
            </div>

            <div class="col-md-3 col-sm-6">
                <a href="./success.html" class="card tall-sm rounded-md text-center bg-gradient-sky">
                    <div class="card-block">
                        <h4 class="text-snow1">Success</h4>
                    </div>
                </a>
            </div>

            <div class="col-md-3 col-sm-6">
                <a href="./projects/index.html" class="card tall-sm rounded-md text-center bg-gradient-sky">
                    <div class="card-block">
                        <h4 class="text-snow1">Projects</h4>
                    </div>
                </a>
            </div>

        </div>
    </Provider>;