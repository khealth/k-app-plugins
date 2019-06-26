import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from '../screens/home-screen'
import OtherScreen from '../screens/other-screen'

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Other: {
        screen: OtherScreen
    }

})

export default createAppContainer(AppNavigator)