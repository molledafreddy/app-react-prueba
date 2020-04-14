import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Multiplication from '../pages/Multiplication'
import LongGest from '../pages/LongGest'
import Repetition from '../pages/Repetition'
import LastName from '../pages/LastName'
import UniqueNumber from '../pages/UniqueNumber'
import NotFound from '../pages/NotFound'
import Header from '../components/Header'

const App = () => (
     <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/multiplication" component={Multiplication} />
            <Route exact path="/longest" component={LongGest} />
            <Route exact path="/repetition" component={Repetition} />
            <Route exact path="/lastname" component={LastName} />
            <Route exact path="/uniquenumbers" component={UniqueNumber} />
            <Route component={NotFound} />
          </Switch>
    </BrowserRouter>
)

export default App