import React, { Component } from 'react';
import { Button, TextInput ,Card} from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddProduct from "./../../../Modal/AProduct";
import ProductList from "./../ProductList/index";
import Order from "./../Order/index";
import {Images} from "./../../../Helper/Images"
import { Text, View, ImageBackground, TouchableOpacity,ScrollView,Image ,Modal} from 'react-native';
import { styles } from './Style';
import BottomTab from "./../BottomTab/index";
import Customer from "./../Customer/index";
import Tailor from "./../Tailor/index";
import AddTailor from "./../Add Tailor/index";
import AddCustomer from "./../Add Customer/index";
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
            <Drawer.Screen name="Add Products" component={AddProduct} options={{
                drawerIcon:()=>{
                  return<FontAwesome5 style={{fontSize:20}} name={'plus-square'}/>
                }
            }} />
            <Drawer.Screen name="Product List" component={ProductList} options={{
                drawerIcon:()=>{
                  return<FontAwesome5 style={{fontSize:20}} name={'tasks'}/>
                }
            }}  />
              <Drawer.Screen name="Order List" component={Order} options={{
                drawerIcon:()=>{
                  return<FontAwesome5 style={{fontSize:20}} name={'first-order'}/>
                }
            }}  />
            <Drawer.Screen name="Tailor" component={Tailor} options={{
                drawerIcon:()=>{
                  return<FontAwesome5 style={{fontSize:20}} name={'user-plus'}/>
                }
            }}/>
             <Drawer.Screen name="Add Tailor" component={AddTailor} options={{
                drawerIcon:()=>{
                  return<FontAwesome5 style={{fontSize:20}} name={'user-plus'}/>
                }
            }}/>
            <Drawer.Screen name="Customer" component={Customer} options={{
                drawerIcon:()=>{
                  return<FontAwesome5 style={{fontSize:20}} name={'users'}/>
                }
            }}  />
             <Drawer.Screen name="Add Customer" component={AddCustomer} options={{
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