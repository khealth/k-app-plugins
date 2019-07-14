import React from "react"
import { View, Button } from "react-native"
import { PluginsRegistry } from '../../src'

function buildPluginAppsMenu() {
    const keys = PluginsRegistry.getPluginsKeys(({ metadata })=> Boolean(metadata.menu))
    return keys.map(value => ({
        key: value,
        title:`Go to ${PluginsRegistry.getPlugin(value).metadata.menu.title || value}`,
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
                        onPress={() => { PluginsRegistry.runPlugin(item.key, params)}}
                        title={item.title}
                    ></Button>))
                }
            </View>
        )
    }
}

export default Menu