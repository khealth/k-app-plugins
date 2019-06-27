import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from '../screens/home-screen'
import OtherScreen from '../screens/other-screen'

const navMap = {
    Home: {screen: HomeScreen},
    Other: { screen: OtherScreen },
}
const AppStack = createStackNavigator(navMap)

// Gal: react navigation is being a dummy and launching a warning
// that you shouldn't be creating multiple containers.
// but that's just because they didn't think of this intended scenario - where
// an isolation is actually desired. So just ignore this #$#$@ warning.
export default createAppContainer(AppStack)