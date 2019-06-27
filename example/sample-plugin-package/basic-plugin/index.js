import React from "react"
import { View, Text, Button } from "react-native"
import { PluginsRegistry } from '../../../src'

const APP_NAME = "example.basic_app"

class BasicApp extends React.Component {

    exitApp = () => {
        PluginsRegistry.exitPluginApp(APP_NAME)
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Basic plugin App</Text>
                <Button
                    onPress={this.exitApp}
                    title="Exit App"
                ></Button>                
            </View>
        )
    }
}

PluginsRegistry.registerPluginApp(APP_NAME, () => BasicApp, {title: "Basic App"})