import React from "react"
import { View, Button } from "react-native"
import { PluginsRegistry } from '../../src'

function buildPluginAppsMenu() {
    const keys = PluginsRegistry.getPluginAppKeys()
    return keys.map(value => ({
        key: value,
        title:`Go to ${PluginsRegistry.getPluginApp(value).metadata.title || value}`,
    }))
}

const pluginsMenuItems = buildPluginAppsMenu()
const params = {name:'gal kahana'}

class Menu extends React.Component {
    render() {
        return (
            <View>
                {pluginsMenuItems.map(item => (
                    <Button
                        key={item.key}
                        onPress={() => { PluginsRegistry.runPluginApp(item.key, params)}}
                        title={item.title}
                    ></Button>))
                }
            </View>
        )
    }
}

export default Menu