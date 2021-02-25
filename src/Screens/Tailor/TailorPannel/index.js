import React, { Component } from 'react';
import { Button, TextInput ,Card} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Images} from "./../../../Helper/Images"
import { Text, View, ImageBackground, TouchableOpacity,ScrollView,Image } from 'react-native';
import { styles } from './Style';
class Index extends Component {
    render() {
        return (
          <View style={styles.backgroungStyle}>
            <ScrollView > 
                 <View style={{ height: 56, backgroundColor: "#8a2be2",flexDirection:"row" }}>
                 <FontAwesome5 name={'bars'} style={{fontSize:20,marginTop: 20, marginLeft: 20, color: "#ffff"}}/><Text style={{ marginTop: 20, marginLeft: 20, color: "#ffff" }}>Dashboard</Text>
          </View>
         <View style={[{flexDirection:"row"}]}>
             <Card style={styles.cardStyle}>
           <Text style={styles.title}>Total Number of user</Text>
           <Text style={styles.textAccountStyle}>Total:5t</Text>
           </Card>
           <Card style={styles.cardStyle}>
           <Text style={styles.title}>Total Number of Orders</Text>
           <Text style={styles.textAccountStyle}>Total:56</Text>
           </Card>
           </View>
           <View style={[{flexDirection:"row"}]}>
             <Card style={styles.cardStyle}>
             <Image style={{width:70,height:70,alignSelf:"center"}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkhV4RQYCiIdUEx--2h-gL0iAFX5S-t0ojKg&usqp=CAU"}}></Image>
           <Text style={styles.textAccountStyle}>Order</Text>
           </Card>
           <Card style={styles.cardStyle}>
           <Image style={{width:70,height:70,alignSelf:"center"}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlm_tNWePYsI63-ige-2Sw1SC4JarnV7JuKg&usqp=CAU"}}></Image>
           <Text style={styles.textAccountStyle}>All User</Text>
           </Card>
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