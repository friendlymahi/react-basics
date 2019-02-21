import React from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from "./../../sagas";

import workspaceReducer from "./../../reducers/Workspace";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(workspaceReducer, applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(mySaga)

export default () =>
    <Provider store={store}><h1 class="headline-1 no-padding"></h1>
        <div class="row">

            <div class="col-md-3 col-sm-6">
                <p href="./home-cover-video.html" class="card tall-sm-0 rounded-md text-center bg-gradient-sky">
                    <div class="card-block">
                    Welcome, User
                    </div>
                </p>
            </div>
            <div class="col-md-9 col-sm-6">
            <p href="./home-cover-video.html" class="card tall-sm-0 rounded-md text-center bg-gradient-sky">
                <div class="card-block">
                <div class="paragraph">Current Balance and On Track ? Indicator</div>
                </div>
            </p>
        </div>

        <div class="col-md-12 col-sm-6 ">
        <p href="./informational.html" class="card tall-sm rounded-md text-center bg-gradient-sky">
            <div class="card-block">

            <div class="paragraph">FutureFIT or RetireFIT etc</div>
            </div>
        </p>
    </div>

            <div class="col-md-12 col-sm-6 ">
                <p href="./informational.html" class="card tall-sm rounded-md text-center bg-gradient-sky">
                    <div class="card-block">

                    <div class="paragraph">Recent 360 Events - Recommended actions, Kick it up, Violator band Carousel</div>
                    </div>
                </p>
            </div>

            <div class="col-md-12 col-sm-6 ">
            <p href="./informational.html" class="card tall-sm rounded-md text-center bg-gradient-sky">
                <div class="card-block">

                <div class="paragraph">Interactive Change Contribution In 3 Clicks</div>
                </div>
            </p>
        </div>
            <div class="col-md-12 col-sm-6">
                <p href="./article.html" class="card tall-sm rounded-md text-center bg-gradient-sky">
                    <div class="card-block">
                        Marketing Block <br/><br/><br/>
                        <button class="btn .cta">Call To Action</button>
                    </div>
                </p>
            </div>

            <div class="col-md-12 col-sm-6 ">
            <p href="./informational.html" class="card tall-md rounded-md text-center bg-gradient-sky">
                <div class="card-block">
                <div class="paragraph">Fund Performance</div>
                </div>
            </p>
        </div>

            <div class="col-md-12 col-sm-6 ">
            <p href="./informational.html" class="card tall-lg rounded-md text-center bg-gradient-sky">
                <div class="card-block">
                <div class="paragraph">Projections , Being on track, etc Carousel with different CTAs</div>
                    <h4 class="text-snow1">Informational</h4>
                </div>
            </p>
        </div>
        
        <div class="col-md-6 col-sm-6">
        <p href="./dashboard.html" class="card tall-sm rounded-md text-center bg-gradient-sky">
            <div class="card-block">
                Contact my financial Advisor
            </div>
        </p>
    </div>

    <div class="col-md-3 col-sm-6">
        <p href="./landing.html" class="card tall-sm rounded-md text-center bg-gradient-sky">
            <div class="card-block">
Other Help 1
            </div>
        </p>
    </div>

<div class="col-md-3 col-sm-6">
    <p href="./dashboard.html" class="card tall-sm rounded-md text-center bg-gradient-sky">
        <div class="card-block">
        Other Help 2
        </div>
    </p>
</div>

</div>
    </Provider>;