import React, { Component } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './Style';
class Index extends Component {
    render() {
        return (
            <View style={styles.backgroungStyle}>
                <View style={styles.bodyStyle}>
                    <View style={styles.bodyinnerStyle}>
                    {/* questoion ask from sir <View style={{flexDirection:"row"}}><TouchableOpacity onPress={()=>this.props.navigation.navigate('TaSign')}><Text style={styles.textTailorStyle}>Tailor</Text></TouchableOpacity><TouchableOpacity onPress={()=>this.props.navigation.navigate('TaSign')}><Text style={styles.textTailorStyle}>|  Admin</Text></TouchableOpacity></View>  */}
                        <Text style={styles.title}>LOGIN</Text>
                        <TextInput style={styles.textInputStyle}
                            label="Email" />
                        <TextInput style={styles.textInputStyle}
                            label="Password" />
                        <Text style={styles.forgotStyle}>Forgot Password</Text>
                        <Button style={[styles.buttonStyle,{marginTop:35}]} mode="contained" onPress={() => this.props.navigation.navigate('TaPannel')}>
                            <Text style={{ marginTop: 50, fontSize: 18 }}>TLogin</Text>
                        </Button>
                        <Button style={[styles.buttonStyle,{marginTop:10}]} mode="contained" onPress={() => this.props.navigation.navigate('APanel')}>
                            <Text style={{ marginTop: 50, fontSize: 18 }}>ALogin</Text>
                        </Button>
                        <View style={{ flexDirection: "row" }}><Text style={[styles.bottomtextStyle, { marginLeft: 40 }]}>Do'nt have an account?</Text><TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}><Text style={[styles.bottomtextStyle, { marginLeft: 10, color: "#8a2be2", fontWeight: "bold" }]}>Sign Up</Text></TouchableOpacity></View>
                    </View>
                </View>
            </View>
        );
    }
}
export default Index;