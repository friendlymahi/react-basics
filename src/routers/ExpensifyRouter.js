import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import ExpensifyDashboard from '../components/Expensify/Dashboard'
import AddExpense from '../components/Expensify/AddExpense';
import EditExpense from '../components/Expensify/EditExpense';
import Help from '../components/Expensify/Help';
import PageNotFound from '../components/Expensify/PageNotFound';
import Header from '../components/Expensify/Layout/Header';

export default  
<div>
    <BrowserRouter>
    <div>
    <Header />
        <center>
            <Switch>
                <Route path="/" component={ExpensifyDashboard} exact />
                <Route path="/create" component={AddExpense} exact/>
                <Route path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={Help} />
                <Route component={PageNotFound} />
            </Switch>
        </center>
        </div>
    </BrowserRouter>
    </div>    
;