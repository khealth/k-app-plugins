import { createStackNavigator, createAppContainer } from 'react-navigation'
import { createPluginScreens } from '../plugins-mgmt/plugin-screens'

import HomeScreen from '../screens/home-screen'
import OtherScreen from '../screens/other-screen'

const AppPluginsScreens = createPluginScreens()

const navMap = {
    Home: {
        screen: HomeScreen
    },
    Other: {
        screen: OtherScreen
    },
    ...AppPluginsScreens
}
const AppNavigator = createStackNavigator(navMap)

export default createAppContainer(AppNavigator)