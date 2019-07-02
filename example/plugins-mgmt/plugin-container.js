import React from 'react'
import { Provider } from 'react-redux'
import { isolationStore } from './isolation-store'

const IsolatedAppNavigationOptions = {
    header: null
}

/**
 * The app container takes care of the following:
 * 1. Isolate any possible "screen props" from the plugin app. Done by wrapping
 *    the plugin app with something that doesn't pass through props
 * 2. Isolate app store from the plugin app. Done by using a provider which sets
 *    the store to be a null store (just empty one).
 * 3. Nulls navigation options, so won't show header or something
 * 4. pass navigation params as "parameters" props as part of the container app implementation
 *    method of passing parameters to apps.
 * @param {*} screenImporter 
 */

function PluginContainer(screenImporter) {
    const TheComponentGlobal = screenImporter()
    const wrapper = class extends React.PureComponent {
        constructor(props) {
            super(props)
        }

        render() {
            return (<Provider store={isolationStore}>
                <TheComponentGlobal parameters={this.props.navigation.state.params} />
            </Provider>)
        }
    }

    wrapper.navigationOptions = IsolatedAppNavigationOptions


    return wrapper
}

export default PluginContainer