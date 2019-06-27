import { PluginsRegistry } from '../../src'
import { navigate, navigateEx, getCurrentStackState } from '../navigation/actions'
import { getScreenName } from './plugin-screens'

// import all plugin packages
import './plugin-includes'

const pluginScreenLaunchSources = {}

function runPluginApp(pluginKey, parameters) {
    const state = getCurrentStackState()
    // saving the source here so that on exit i can navigate back to it
    const currentRoute = state.routes[state.index]
    pluginScreenLaunchSources[pluginKey] = {
        key: currentRoute.key,
        routeName: currentRoute.routeName
    }
    navigate(getScreenName(pluginKey), parameters)
}

function exitPluginApp(pluginKey) {
    const navigateBackTo = pluginScreenLaunchSources[pluginKey]
    if (!navigateBackTo) {
        throw new Error("Didnt find exit target. most probably cause launching the app wasn't done with runPluginApp, but rather with an alternative method (like direct navigate)")
    }
    delete pluginScreenLaunchSources[pluginKey]
    navigateEx(navigateBackTo)
}


// register as plugin app
PluginsRegistry.registerContainerApp({runPluginApp, exitPluginApp})