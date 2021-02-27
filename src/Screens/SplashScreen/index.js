import React, { Component } from 'react';
// import { Card, Button } from 'react-native-paper';
import { Text, View, ImageBackground } from 'react-native';
import { Images } from "./../../Helper/Images"
import { styles } from './Style';
class Index extends Component {
    constructor(props) {
        super(props)
        setTimeout(() => {
            this.props.navigation.navigate('Home')
        }, 3000)
    }

    render() {
        return (
            <ImageBackground style={{ height: "100%", width: "100%", backgroundColor: '#8a2be2' }} source={Images.splash}>
                <Text style={styles.container}>Fission</Text>
            </ImageBackground>
        );
    }
}
export default Index;