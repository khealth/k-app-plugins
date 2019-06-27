import React from 'react'
import { PluginsRegistry } from '../../src'

const IsolatedAppNavigationOptions = {
    header: null
}

function PluginContainer(screenImporter) {
    const TheComponentGlobal = screenImporter()
    const wrapper = class extends React.PureComponent {
        constructor(props) {
            super(props)
        }

        render() {
            return <TheComponentGlobal parameters={this.props.navigation.state.params} />
        }
    }

    wrapper.navigationOptions = IsolatedAppNavigationOptions


    return wrapper
}


export function getScreenName(value) {
    return `plugin.${value}`
}

function createScreenForPlugin(pluginInfo) {
    // currently trivial return of component. should encapsulate for better isolation
    // (both in terms of view an data). also align parameters api (currently via nav)
    return PluginContainer(pluginInfo.componentProvider)
}

export function createPluginScreens() {
    // iterate plugins and create screen definitons to include in navigator
    const keys = PluginsRegistry.getPluginAppKeys()

    return keys.reduce((acc, value) => {
        return {
            [getScreenName(value)]: {
                screen: createScreenForPlugin(PluginsRegistry.getPluginApp(value))
            },
            ...acc
        }
    }, {})
}