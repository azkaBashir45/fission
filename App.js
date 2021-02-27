// In App.js in a new project

import React,{Component} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from  "./src/Screens/SplashScreen/index";
import SignInForm from  "./src/Screens/Login/SignInForm/index";
import SignUpForm from  "./src/Screens/Login/SignUpForm/index";
import Home from  "./src/Screens/Home/index";
import ShirtStyle from  "./src/Screens/ShirtStyle/index";
import ChooseFabric from  "./src/Screens/SelectFabric/index";
import ChooseCollar from  "./src/Screens/SelectCollar/index";
import ChooseCuff from  "./src/Screens/SelectCuff/index";
import ChooseLength from  "./src/Screens/ShirtLength/index";
import MoreOptions from  "./src/Screens/MoreOptions/index";
import Cart from  "./src/Screens/Cart/index";
import LoginPage from  "./src/Screens/Login/LoginPage/index";
import TailorSign from  "./src/Screens/Tailor/Login/SigninForm/index";
import TailorSignUp from  "./src/Screens/Tailor/Login/SignUpForm/index";
import TailorPanel from  "./src/Screens/Tailor/TailorPannel/index";
import Dashboard from "./src/Modal/TDashboard/index";
import Order from "./src/Modal/TOrder/index";
import Customer from "./src/Modal/TCustomers/index";
import Menu from "./src/Modal/Menubar/index";
import AdminPannel from "./src/Screens/Admin/AdminPannel/index";
import AdminProduct from "./src/Modal/AProduct/index";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AdminProductList from "./src/Screens/Admin/ProductList/index";
<<<<<<< HEAD
import MyTabs from "./test";
=======
import MyTab from "./test";
>>>>>>> 6d4771e1c514679a396462e8cddbd5ae6b02dfe1
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

class App extends Component{
    render(){
        return (
          <View>
            <NavigationContainer>
              <Stack.Navigator headerMode="none">
              <Stack.Screen name="test1" component={test} />
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Sign" component={SignInForm} />
                <Stack.Screen name="SignUp" component={SignUpForm} />
                <Stack.Screen name="TaSign" component={TailorSign} />
                <Stack.Screen name="TaPannel" component={TailorPanel} />
                <Stack.Screen name="TailorSignUp" component={TailorSignUp} />
                <Stack.Screen name="ShowStyle" component={ShirtStyle} />
                <Stack.Screen name="Fabric" component={ChooseFabric} />
                <Stack.Screen name="Collar" component={ChooseCollar} />
                <Stack.Screen name="Cuff" component={ChooseCuff} />
                <Stack.Screen name="Length" component={ChooseLength} />
                <Stack.Screen name="My" component={MyTabs} />
                <Stack.Screen name="Options" component={MoreOptions} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="TDashboard" component={Dashboard} />
                <Stack.Screen name="TOrder" component={Order} />
                <Stack.Screen name="TCustomer" component={Customer} />
                <Stack.Screen name="menu" component={Menu} />
                <Stack.Screen name="APanel" component={AdminPannel} />
                <Stack.Screen name="AProduct" component={AdminProduct} />
                <Stack.Screen name="MyTab" component={MyTab} />
                <Stack.Screen name="AProductList" component={AdminProductList} />
              </Stack.Navigator>
            </NavigationContainer>
             <NavigationContainer>
             <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
     
      </Drawer.Navigator>
           </NavigationContainer>
           <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
           </View>
          );

    }
 
}

export default App;