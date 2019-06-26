import React from "react"
import { View, Text, Button } from "react-native"

class HomeScreen extends React.Component {

    navigateToOther = () => {
        const { navigation } = this.props
        navigation.navigate('Other')
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen</Text>

                <Button
                    onPress={this.navigateToOther}
                    title="Go to Other Screen"
                ></Button>
            </View>
        )
    }
}

export default HomeScreen