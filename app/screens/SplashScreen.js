import React, {Component} from 'react'
import {Text} from 'react-navite'
import * as Animatable from 'react-native-animatable'
import {imageBackgroudStyle} from '@styles/General'
import { StatusBar } from 'react-native'

export default class LogicScreen extends Component{

    goToScreen(routeName){
        this.props.navigation.navigate(routeName)
    }

    componentDidMount(){

        setTimeOut( () => {
            this.goToScreen('Login')
        }, 5000, this)
    }
    render(){
        return(
            <View style={imageBackgroudStyle}>
                <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)'/>
                <Animatable.Image
                    animation='pulse'
                    easing='ease-out'
                    iterationCount='infinite'
                    style={{
                        width: 200,
                        height: 200,
                        margin: 100
                    }}
                    source={require('@resources/images/udea.png')}
                />

            </View>
        )
    }
}