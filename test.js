import * as React from 'react';
<<<<<<< HEAD
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 function HomeScreen() {
=======
import { Text, View,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Label } from 'native-base';


function HomeScreen() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style: {
        
        marginTop:650
      }
    }} swipeEnable>
      <Tab.Screen name="Home" component={HomeScreen}  />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
 

import {StyleSheet} from 'react-native';
 export const styles = StyleSheet.create({
    container: {
    marginTop:100,
    
    }
})
=======
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}><Text>Settings!</Text></TouchableOpacity>
    </View>
  );
}
const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function MyTaby() {
  return (
   
      <Tab.Navigator>
        <Tab.Screen options={{tabBarIcon:()=>{
          return<FontAwesome5  name={'home'}/>
        }
        
      }}
         name="Home" component={HomeScreen}  />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
      
  );
}
export default function MyTab() {
  return (
   
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={MyTaby} />
    <Drawer.Screen name="Setting" component={SettingsScreen} />
  
  </Drawer.Navigator>
      
  );
}
>>>>>>> 6d4771e1c514679a396462e8cddbd5ae6b02dfe1
