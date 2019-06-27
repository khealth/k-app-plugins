
// # resigtry state
const _pluginsApps = {}
const __pluginsAppsOrd = []
let _containerApp = null

// # plugin side - regitration
function registerPluginApp(pluginKey, componentProvider, metadata) {
    const pluginRegistryItem = {componentProvider, metadata}
    _pluginsApps[pluginKey] = pluginRegistryItem
    __pluginsAppsOrd.push(pluginKey)

    return pluginRegistryItem
}

// # app side - querying
function getPluginAppKeys() {
    return __pluginsAppsOrd
}

function getPluginApp(pluginKey) {
    return _pluginsApps[pluginKey]
}

// # app side - registration
function registerContainerApp(containerApp) {
    _containerApp = containerApp
    return containerApp
} 

// # app side/plugin side - running, exiting
function runPluginApp(pluginKey, parameters) {
    if (!_containerApp)
        throw new Error("runPluginApp: no container app available")
    
    return _containerApp.runPluginApp(pluginKey, parameters)
}

function exitPluginApp(pluginKey) {
    if (!_containerApp)
        throw new Error("exitPluginApp: no container app available")
    
    return _containerApp.exitPluginApp(pluginKey)
}

module.exports = {
    registerPluginApp,
    getPluginAppKeys,
    getPluginApp,
    registerContainerApp,
    runPluginApp,
    exitPluginApp
}