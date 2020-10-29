import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SplashScreen from '@screens/SplashScreen'
import LoginScreen from '@screens/LoginScreen'

const AppNavigation = createStackNavigator({
    
    Splash:{
        scren: SplashScreen,
        navigationOptions:{
            headerShown: false,
        }
    },

    Login:{
        scren: LoginScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
})

export default createAppContainer(AppNavigation)