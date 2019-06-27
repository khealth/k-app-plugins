import React from "react"
import { Provider }  from "react-redux"
import RootNavigator from './navigation/root-navigator'
import { saveNavigationInstance } from './navigation/actions'
import { basicReduxStore } from './basic-redux-store'

class App extends React.Component {
    render() {
        return (
            <Provider store={basicReduxStore}>
                <RootNavigator ref={saveNavigationInstance}/>
            </Provider>
        )
    }
}

export default App