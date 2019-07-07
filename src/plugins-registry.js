
// # resigtry state
if (!global._k_app_plugins_plugins_state) {
    global._k_app_plugins_plugins_state = {
        apps: {},
        ord: []
    }
}

function _getPluginApps() {
    return global._k_app_plugins_plugins_state.apps
}

function _getPluginAppsOrd() {
    return global._k_app_plugins_plugins_state.ord
}

function _getApp() {
    return global._k_app_plugins_containerApp
}

function _setApp(app) {
    global._k_app_plugins_containerApp = app
}

// # plugin side - regitration
function registerPluginApp(pluginKey, componentProvider, metadata) {
    const pluginRegistryItem = {componentProvider, metadata}
    _getPluginApps()[pluginKey] = pluginRegistryItem
    _getPluginAppsOrd().push(pluginKey)

    return pluginRegistryItem
}

// # app side - querying
function getPluginAppKeys() {
    return _getPluginAppsOrd()
}

function getPluginApp(pluginKey) {
    return _getPluginApps()[pluginKey]
}

// # app side - registration
function registerContainerApp(containerApp) {
    _setApp(containerApp)
    return containerApp
} 

// # app side/plugin side - running, exiting
function runPluginApp(pluginKey, parameters) {
    if (!_getApp())
        throw new Error("runPluginApp: no container app available")
    
    return _getApp().runPluginApp(pluginKey, parameters)
}

function exitPluginApp(pluginKey) {
    if (!_getApp())
        throw new Error("exitPluginApp: no container app available")
    
    return _getApp().exitPluginApp(pluginKey)
}

module.exports = {
    registerPluginApp,
    getPluginAppKeys,
    getPluginApp,
    registerContainerApp,
    runPluginApp,
    exitPluginApp
}