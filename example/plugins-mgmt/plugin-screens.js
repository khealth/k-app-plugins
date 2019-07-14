import { PluginsRegistry } from '../../src'
import PluginContainer from './plugin-container'


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
    const keys = PluginsRegistry.getPluginsKeys()

    return keys.reduce((acc, value) => {
        return {
            [getScreenName(value)]: {
                screen: createScreenForPlugin(PluginsRegistry.getPlugin(value))
            },
            ...acc
        }
    }, {})
}