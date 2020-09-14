import React from "react"
import { Route } from "react-router-dom"
import NavBar from "./nav/Nav"
import ApplicationViews from "./ApplicationViews"

const AnxietyApp = () => {
    return (
        <React.Fragment>
            <Route render={props => (
                <NavBar {...props} />
            )} />
            <ApplicationViews />
        </React.Fragment>
    )
}

export default AnxietyApp
