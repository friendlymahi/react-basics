import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import './../../styles/Header.css';

export default () => 
<div>
<h1>Expensify App</h1>
<ul>
<li><NavLink to='/' activeClassName="is-active" exact>Dashboard</NavLink></li>
<li><NavLink to='/create' activeClassName="is-active" exact>Add Expense</NavLink></li>
<li><NavLink to='/edit' activeClassName="is-active">Edit Expense</NavLink></li>
<li><NavLink to='/help' activeClassName="is-active">Help</NavLink></li>
<li><Link to='/create/1'>Non Existing Page</Link></li>
</ul>
</div>;