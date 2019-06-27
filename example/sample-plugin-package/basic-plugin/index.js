import React from "react"
import { View, Text, Button } from "react-native"
import PropTypes from 'prop-types'
import { PluginsRegistry } from '../../../src'

const APP_NAME = "example.basic_app"

class BasicApp extends React.Component {

    exitApp = () => {
        PluginsRegistry.exitPluginApp(APP_NAME)
    }

    render() {
        const {parameters}  = this.props

        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Basic plugin App</Text>
                <Text>Parmeters:</Text>
                <Text>{JSON.stringify(parameters, null, 2)}</Text>
                <Button
                    onPress={this.exitApp}
                    title="Exit App"
                ></Button>                
            </View>
        )
    }
}

BasicApp.propTypes = {
    parameters: PropTypes.object
}

PluginsRegistry.registerPluginApp(APP_NAME, () => BasicApp, {title: "Basic App"})