import React, { Component } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Images } from "./../../../Helper/Images";
import { styles } from './Style';
class Index extends Component {
    render() {
        return (
            <View style={styles.backgroungStyle}>
               
                        <Button style={[styles.buttonStyle,{marginTop:300}]} mode="contained" onPress={() => this.props.navigation.navigate('Sign')}>
                            <Text style={{ marginTop: 50, fontSize: 18 }}>As a Customer</Text>
                        </Button>
                        <Button style={[styles.buttonStyle]} mode="contained" onPress={() => this.props.navigation.navigate('TaSign')}>
                            <Text style={{ marginTop: 50, fontSize: 18 }}>As a Tailor</Text>
                        </Button>
                    </View>
        );
    }
}
export default Index;