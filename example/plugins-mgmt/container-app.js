import { PluginsRegistry } from '../../src'
import { navigate, navigateEx, getCurrentStackState } from '../navigation/actions'
import { getScreenName } from './plugin-screens'

// import all plugin packages
import './plugin-includes'

const pluginScreenLaunchSources = {}
const pluginsState = {}

function runPlugin(pluginKey, parameters) {
    const stackState = getCurrentStackState()
    // saving the source here so that on exit i can navigate back to it
    const currentRoute = stackState.routes[stackState.index]
    pluginScreenLaunchSources[pluginKey] = {
        key: currentRoute.key,
        routeName: currentRoute.routeName
    }
    const pluginStateKey = PluginsRegistry.getPlugin(pluginKey).metadata.stateKey
    const initState = (pluginStateKey && getPluginState(pluginStateKey)) || {}
    navigate(getScreenName(pluginKey), {
        parameters,
        initState 
    })
}

function exitPlugin(pluginKey) {
    const navigateBackTo = pluginScreenLaunchSources[pluginKey]
    if (!navigateBackTo) {
        throw new Error("Didnt find exit target. most probably cause launching the app wasn't done with runPlugin, but rather with an alternative method (like direct navigate)")
    }
    delete pluginScreenLaunchSources[pluginKey]
    navigateEx(navigateBackTo)
}

function getPluginState(pluginStateKey) {
    return pluginsState[pluginStateKey] || {}
}

function setPluginState(pluginStateKey, state) {
    pluginsState[pluginStateKey] = state
    return pluginsState[pluginStateKey]
}

function mergePluginState(pluginStateKey, state) {
    return setPluginState(pluginStateKey, {
        ...getPluginState(pluginStateKey),
        ...state
    })
}

// register as plugin app
PluginsRegistry.registerContainerApp({
    runPlugin,
    exitPlugin,
    getPluginState,
    setPluginState,
    mergePluginState
})