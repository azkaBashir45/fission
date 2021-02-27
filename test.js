import * as React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')}><Text>Settings!</Text></TouchableOpacity>
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