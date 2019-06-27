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
}
const AppStack = createStackNavigator(navMap,
    {
        // regular app screens are loaded as cards
        mode: 'card'
    }
)
const RootStack = createStackNavigator(
    {
        Main: {
            screen: AppStack,
        },
        // i'd like to load plugin screens as modals...which is why this trick is happening
        ...AppPluginsScreens
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
)


export default createAppContainer(RootStack)