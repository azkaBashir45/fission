import React, { Component } from 'react';
import { Button, TextInput ,Card} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Text, View, ImageBackground, TouchableOpacity,ScrollView,Image } from 'react-native';
import { styles } from './Style';
class Index extends Component {
    render() {
        return (
          <View style={styles.backgroungStyle}>
         
                 <View style={{ height: 56, backgroundColor: "#8a2be2",flexDirection:"row" }}>
                 <FontAwesome5 name={'bars'}  style={{fontSize:20,marginTop: 25, marginLeft: 20, color: "#ffff"}}/><Text style={{ marginTop: 25, marginLeft: 20, color: "#ffff" }}>Dashboard</Text>
          </View>
       
        
           <View style={styles.bottomTabStyle}>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('TDashboard')} ><View><FontAwesome5 name={'tachometer-alt'} style={styles.tabiconStyle}></FontAwesome5></View><Text style={styles.tabtextStule}>Dashboard</Text></TouchableOpacity>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('TOrder')} ><View><FontAwesome5 name={'first-order'} style={[styles.tabiconStyle,{marginLeft:60}]}/><Text style={[styles.tabtextStule,{marginLeft:56}]}>Order</Text></View></TouchableOpacity>
           <TouchableOpacity  onPress={()=>this.props.navigation.navigate('TCustomer')}><View><FontAwesome5 name={'baby'} style={[styles.tabiconStyle,{marginLeft:70}]}/><Text style={[styles.tabtextStule,{marginLeft:52}]}>Customer</Text ></View></TouchableOpacity>
           </View>
           </View>
           
           
        );
    }
}
export default Index;