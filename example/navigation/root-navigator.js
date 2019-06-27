import { createStackNavigator, createAppContainer } from 'react-navigation'
import { createPluginScreens } from '../plugins-mgmt/plugin-screens'

import HomeScreen from '../screens/home-screen'
import OtherScreen from '../screens/other-screen'
import OtherScreenWithMenu from '../screens/other-screen-withmenu'

const AppPluginsScreens = createPluginScreens()

const navMap = {
    Home: {screen: HomeScreen},
    Other: { screen: OtherScreen },
    OtherScreenWithMenu: {screen: OtherScreenWithMenu},
    ...AppPluginsScreens
}
const AppNavigator = createStackNavigator(navMap)

export default createAppContainer(AppNavigator)