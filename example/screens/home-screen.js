import React from "react"
import { View, Text, Button } from "react-native"
import { PluginsRegistry } from '../../src'

function buildPluginAppsMenu() {
    const keys = PluginsRegistry.getPluginAppKeys()

    return keys.reduce((acc, value) => {
        return [
            {
                key: value,
                title:`Go to ${PluginsRegistry.getPluginApp(value).metadata.title || value}`,
            },
            ...acc
        ]
    }, [])
}

const pluginsMenuItems = buildPluginAppsMenu()
const params = {name:'gal', family:'kahana'}

class HomeScreen extends React.Component {

    navigateToOther = () => {
        const { navigation } = this.props
        navigation.navigate('Other')
    }

    render() {
        return (
            <View style={{ flex: 1}}>
                <Text>Home Screen</Text>
                <Text>Main Navigation</Text>
                <Button
                    onPress={this.navigateToOther}
                    title="Go to Other Screen"
                ></Button>
                <Text>Plugins</Text>
                {pluginsMenuItems.map(item => (
                    <Button
                        key={item.key}
                        onPress={() => { PluginsRegistry.runPluginApp(item.key, params)}}
                        title={item.title}
                    ></Button>
                ))
                }
            </View>
        )
    }
}

export default HomeScreen