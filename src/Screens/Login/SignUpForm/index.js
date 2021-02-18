import React, { Component } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Images } from "./../../../Helper/Images";
import { styles } from './Style';
class Index extends Component {
    render() {
        return (
            <View style={styles.backgroungStyle}>
                <View style={styles.bodyStyle}>
                    <View style={styles.bodyinnerStyle}>
                        <Text style={styles.title}>SIGN UP</Text>
                        <TextInput style={styles.textInputStyle}
                            label="User Name" />
                        <TextInput style={styles.textInputStyle}
                            label="Email" />
                        <TextInput style={styles.textInputStyle}
                            label="Password" />
                        <TextInput style={styles.textInputStyle}
                            label="Confirm Password" />
                        <Button style={styles.buttonStyle} mode="contained" onPress={() => this.props.navigation.navigate('Sign')}>
                            <Text style={{ marginTop: 50, fontSize: 18 }}>Sign Up</Text>
                        </Button>
                        <View style={{ flexDirection: "row" }}><Text style={[styles.bottomtextStyle, { marginLeft: 20 }]}>Do you have already an account?</Text><TouchableOpacity onPress={() => this.props.navigation.navigate('Sign')}><Text style={[styles.bottomtextStyle, { marginLeft: 10, color: "#8a2be2", fontWeight: "bold" }]}>Sign In</Text></TouchableOpacity></View>
                    </View>
                </View>
            </View>
        );
    }
}
export default Index;