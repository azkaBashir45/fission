import React, { Component } from 'react';
import { Button, TextInput ,Card} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, ImageBackground, TouchableOpacity,ScrollView,Image ,Modal} from 'react-native';
import { styles } from './Style';
import DashBoard from "./../DashBoard/index";
import ProductList from "./../ProductList/index";
import Order from "./../Order/index";
const Tab = createBottomTabNavigator();
class Index extends Component {
  
    render() {
        return (
          <View style={styles.backgroungStyle}>
           
           <Tab.Navigator>
        <Tab.Screen options={{tabBarIcon:()=>{
          return<FontAwesome5  name={'home'}/>
        }
        
      }}
         name="Dashboard" component={DashBoard}  />
        <Tab.Screen name="Product" component={ProductList} />
        <Tab.Screen name="Order" component={Order} />
      </Tab.Navigator>
         
           </View>
           
           
        );
    }
}
export default Index;