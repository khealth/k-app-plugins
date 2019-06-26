import React from "react"
import RootNavigator from './navigation/root-navigator'
import { saveNavigationInstance } from './navigation/actions'

class App extends React.Component {
    render() {
        return (
            <RootNavigator ref={saveNavigationInstance}/>
        )
    }
}

export default App