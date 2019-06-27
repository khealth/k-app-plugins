import React from "react"
import { View, Text } from "react-native"
import Menu from './menu'

class OtherScreenWithMenu extends React.Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <Text>Other Screen with menu</Text>
                <Text>Plugins menu</Text>
                <Menu/>

            </View>
        )
    }
}

export default OtherScreenWithMenu