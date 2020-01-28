import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
//import UserCrud from '../components/user/UserCrud'
import Proximolancamento from '../components/home/Proximolancamento'
import Ultimolancamento from '../components/home/Ultimolancamento'
import Proximoslancamentos from '../components/home/Proximoslancamentos'
import Lancamentospassados from '../components/home/Lancamentospassados'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/proximolancamento' component={Proximolancamento} />
        <Route path='/ultimolancamento' component={Ultimolancamento} />
        <Route path='/proximoslancamentos' component={Proximoslancamentos} />
        <Route path='/lancamentospassados' component={Lancamentospassados} />
        <Redirect from='*' to='/' />
    </Switch>