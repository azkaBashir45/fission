import React, { Component } from 'react';
import { Button, TextInput ,Card} from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Order from "./../../Admin/Order/index";
import { Text, View, ImageBackground, TouchableOpacity,ScrollView,Image ,Modal} from 'react-native';
import { styles } from './Style';
import BottomTab from "./../BottomTab/index";
import Customer from "./../../Admin/Customer"

const Drawer = createDrawerNavigator();
class Index extends Component {
  
    render() {
        return (
          <View style={styles.backgroungStyle}>
           
                 <View style={styles.headerBodyStyle}>
                 <TouchableOpacity onPress={()=>this.props.navigation.openDrawer}><FontAwesome5 name={'bars'} style={styles.headericonStyle}/></TouchableOpacity><Text style={styles.headerTextStyle }>Dashboard</Text>
           </View>
           
           <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={BottomTab} options={{
                drawerIcon:()=>{
                  return<FontAwesome5 style={{fontSize:20}} name={'home'}/>
                }
            }} />
          
              <Drawer.Screen name="Order List" component={Order} options={{
                drawerIcon:()=>{
                  return<FontAwesome5 style={{fontSize:20}} name={'first-order'}/>
                }
            }}  />
         
            <Drawer.Screen name="Customer" component={Customer} options={{
                drawerIcon:()=>{
                  return<FontAwesome5 style={{fontSize:20}} name={'users'}/>
                }
            }}  />
            
           </Drawer.Navigator>
          
           
           </View>
           
           
        );
    }
}
export default Index;