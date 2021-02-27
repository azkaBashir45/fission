import React, { Component } from 'react';
import { Button, TextInput ,Card} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Text, View, ImageBackground, TouchableOpacity,ScrollView,Image,Modal,Pressable } from 'react-native';
import { styles } from './Style';
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isVisiableModal: true
    }
  }

    render() {
        return (
          <View >
          <Modal visible={this.state.isVisiableModal} transparent={true}>
            <View style={styles.backgroungStyle}>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('TDashboard')} ><View style={{flexDirection:"row"}}><FontAwesome5 name={'tachometer-alt'} style={styles.tabiconStyle}></FontAwesome5><Text style={styles.tabtextStule}>Dashboard</Text></View></TouchableOpacity>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('TOrder')}><View><FontAwesome5 name={'first-order'} style={[styles.tabiconStyle,{marginLeft:60}]}/><Text style={[styles.tabtextStule,{marginLeft:56}]}>Order</Text></View></TouchableOpacity>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('TCustomer')}><View><FontAwesome5 name={'baby'} style={[styles.tabiconStyle,{marginLeft:70}]}/><Text style={[styles.tabtextStule,{marginLeft:52}]}>Customer</Text ></View></TouchableOpacity>
           </View>
           </Modal>
          
           </View>
          
           
           
        );
    }
}
export default Index;