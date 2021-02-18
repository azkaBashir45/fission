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
                        <Text style={styles.title}>LOGIN</Text>
                        <TextInput style={styles.textInputStyle}
                            label="Email" />
                        <TextInput style={styles.textInputStyle}
                            label="Password" />
                        <Text style={styles.forgotStyle}>Forgot Password</Text>
                        <Button style={styles.buttonStyle} mode="contained" onPress={() => this.props.navigation.navigate('ShowStyle')}>
                            <Text style={{ marginTop: 50, fontSize: 18 }}>Login</Text>
                        </Button>
                        <View style={{ flexDirection: "row" }}><Text style={[styles.bottomtextStyle, { marginLeft: 40 }]}>Do'nt have an account?</Text><TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}><Text style={[styles.bottomtextStyle, { marginLeft: 10, color: "#8a2be2", fontWeight: "bold" }]}>Sign Up</Text></TouchableOpacity></View>
                    </View>
                </View>
            </View>
        );
    }
}
export default Index;