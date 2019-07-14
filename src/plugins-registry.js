
// # resigtry state
if (!global._k_app_plugins_plugins_state) {
    global._k_app_plugins_plugins_state = {
        plugins: {},
        ord: []
    }
}

function _getPlugins() {
    return global._k_app_plugins_plugins_state.plugins
}

function _getPluginsOrd() {
    return global._k_app_plugins_plugins_state.ord
}

function _getApp() {
    return global._k_app_plugins_containerApp
}

function _setApp(app) {
    global._k_app_plugins_containerApp = app
}

// # plugin side - regitration
function registerPlugin(pluginKey, componentProvider, metadata) {
    const pluginRegistryItem = {componentProvider, metadata}
    _getPlugins()[pluginKey] = pluginRegistryItem
    _getPluginsOrd().push(pluginKey)

    return pluginRegistryItem
}

// # app side - querying
function _filterPluginKeys(filter) {
    if (!filter) return _getPluginsOrd()

    return _getPluginsOrd().filter(pluginKey =>
        filter(_getPlugins()[pluginKey], pluginKey),
    )
}

function getPluginsKeys(filter, sort) {
    const filteredPlugins = _filterPluginKeys(filter)
    if (!sort) return filteredPlugins

    return filteredPlugins.sort(pluginKey =>
        sort(_getPlugins(pluginKey), pluginKey),
    )
}

function getPlugin(pluginKey) {
    return _getPlugins()[pluginKey]
}

// # app side - registration
function registerContainerApp(containerApp) {
    _setApp(containerApp)
    return containerApp
} 

// # app services

// Plugin start/stop
function runPlugin(pluginKey, parameters) {
    if (!_getApp())
        throw new Error("runPlugin: no container app available")
    
    return _getApp().runPlugin(pluginKey, parameters)
}

function exitPlugin(pluginKey) {
    if (!_getApp())
        throw new Error("exitPlugin: no container app available")
    
    return _getApp().exitPlugin(pluginKey)
}

// Plugin state getting/saving (merge indicates that new data is merged over old data)
function getPluginState(pluginStateKey) {
    if (!_getApp())
        throw new Error("getPluginState: no container app available")
    
    return _getApp().getPluginState(pluginStateKey)    
}

function mergePluginState(pluginStateKey, state) {
    if (!_getApp())
        throw new Error("mergePluginState: no container app available")
    
    return _getApp().mergePluginState(pluginStateKey, state)    
}

function setPluginState(pluginStateKey, state) {
    if (!_getApp())
        throw new Error("setPluginState: no container app available")
    
    return _getApp().setPluginState(pluginStateKey, state)    
}

module.exports = {
    registerPlugin,
    getPluginsKeys,
    getPlugin,
    registerContainerApp,
    runPlugin,
    exitPlugin,
    getPluginState,
    mergePluginState,
    setPluginState
}