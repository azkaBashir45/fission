import React, { Component } from 'react';
import { Button, TextInput ,Card} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Text, View, ImageBackground, TouchableOpacity,ScrollView,Image ,Modal} from 'react-native';
import { styles } from './Style';
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isVisiableModal: false
    }
  }
    render() {
        return (
          <View style={styles.backgroungStyle}>
          <View >
          <FontAwesome5 name={'product-hunt'} style={styles.iconStyle}/>
           <TextInput style={styles.inputStyle}
           label="User Name"
           ></TextInput>
           <TextInput style={styles.inputStyle}
           label="Email"
           ></TextInput>
          <TextInput style={styles.inputStyle}
           label="Phone Number"
           keyboardType="decimal-pad"
           ></TextInput>
            <Button  style={styles.buttonStyle} mode="contained" onPress={() => console.log('Pressed')}>
                Save
  </Button>
          </View>
           </View>
           
           
        );
    }
}
export default Index;