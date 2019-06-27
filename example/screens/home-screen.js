import React from "react"
import { View, Text, Button } from "react-native"
import Menu from './menu'

class HomeScreen extends React.Component {

    navigateToOther = () => {
        const { navigation } = this.props
        navigation.navigate('Other')
    }

    navigateToOtherWithMenu = () => {
        const { navigation } = this.props
        navigation.navigate('OtherScreenWithMenu')
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
                <Button
                    onPress={this.navigateToOtherWithMenu}
                    title="Go to Other Screen with menu"
                ></Button>
                <Text>Plugins</Text>
                <Menu/>
            </View>
        )
    }
}

export default HomeScreen