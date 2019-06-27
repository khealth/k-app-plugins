import React from "react"
import { PluginsRegistry } from '../../../src'

import RootNavigator from './navigation/root-navigator'
import { APP_NAME } from './consts'

class App extends React.Component {
    render() {
        return (
            <RootNavigator/>
        )
    }
}

PluginsRegistry.registerPluginApp(APP_NAME, () => App, {title: 'Nav App'})

export default App