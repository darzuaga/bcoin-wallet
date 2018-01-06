import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Activity from './Activity'

const FourOhFour = () => <h1>404</h1>;

const App = () => {
    return(
        <div className="app uk-height-1-1">
            <Switch>
                <Route exact path='/' component={Activity} />
                <Route component={FourOhFour} />
            </Switch>
        </div>
    )
}

export default App;
