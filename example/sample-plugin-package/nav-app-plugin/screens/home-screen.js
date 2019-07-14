import React from "react"
import { View, Text, Button } from "react-native"
import { PluginsRegistry } from '../../../../src'
import { NAV_APP_NAME } from '../../app-names'

class HomeScreen extends React.Component {

    navigateToOther = () => {
        const { navigation } = this.props
        navigation.navigate('Other')
    }

    exitApp = () => {
        PluginsRegistry.exitPlugin(NAV_APP_NAME)
    }    

    render() {
        return (
            <View style={{ flex: 1}}>
                <Text>Home Screen of Nav App</Text>
                <Button
                    onPress={this.navigateToOther}
                    title="Go to Other Screen of Nav App"
                ></Button>
                <Button
                    onPress={this.exitApp}
                    title="Exit App"
                ></Button>                  
            </View>
        )
    }
}

export default HomeScreen