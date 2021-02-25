import React, { Component } from 'react';
import { Button, TextInput ,Card} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Text, View, ImageBackground, TouchableOpacity,ScrollView,Image } from 'react-native';
import { styles } from './Style';
class Index extends Component {
    render() {
        return (
          <View style={styles.backgroungStyle}>
            <ScrollView > 
                 <View style={{ height: 56, backgroundColor: "#8a2be2",flexDirection:"row" }}>
                 <TouchableOpacity onPress={()=>this.props.navigation.navigate('menu')}><FontAwesome5  name={'bars'} style={{marginTop: 20, marginLeft: 20, color: "#ffff",fontsize:20}} /></TouchableOpacity><Text style={{ marginTop: 18, marginLeft: 20,fontSize:16, color: "#ffff" }}>Customer</Text>
          </View>
       
           </ScrollView>
           <View style={styles.bottomTabStyle}>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('TDashboard')} ><View><FontAwesome5 name={'tachometer-alt'} style={styles.tabiconStyle}></FontAwesome5></View><Text style={styles.tabtextStule}>Dashboard</Text></TouchableOpacity>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('TOrder')}><View><FontAwesome5 name={'first-order'} style={[styles.tabiconStyle,{marginLeft:60}]}/><Text style={[styles.tabtextStule,{marginLeft:56}]}>Order</Text></View></TouchableOpacity>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('TCustomer')}><View><FontAwesome5 name={'baby'} style={[styles.tabiconStyle,{marginLeft:70}]}/><Text style={[styles.tabtextStule,{marginLeft:52}]}>Customer</Text ></View></TouchableOpacity>
           </View>
           </View>
           
           
        );
    }
}
export default Index;