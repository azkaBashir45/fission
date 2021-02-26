import React, { Component } from 'react';
import { Button, TextInput ,Card} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Images} from "./../../../Helper/Images"
import { Text, View, ImageBackground, TouchableOpacity,ScrollView,Image ,Modal} from 'react-native';
import { styles } from './Style';
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isVisiableModal: false
    }
  }
    render() {
        return (
          <View style={styles.backgroungStyle}>
           
                 <View style={{ height: 56, backgroundColor: "#8a2be2",flexDirection:"row" }}>
                 <TouchableOpacity onPress={()=>this.setState({isVisiableModal:true})}><FontAwesome5 name={'bars'} style={{fontSize:20,marginTop: 20, marginLeft: 20, color: "#ffff"}}/></TouchableOpacity><Text style={{ marginTop: 20, marginLeft: 20, color: "#ffff" }}>Dashboard</Text>
           </View>
         
           <View style={styles.bottomTabStyle}>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('TDashboard')} ><View><FontAwesome5 name={'tachometer-alt'} style={styles.tabiconStyle}></FontAwesome5></View><Text style={styles.tabtextStule}>Dashboard</Text></TouchableOpacity>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('TOrder')}><View><FontAwesome5 name={'first-order'} style={[styles.tabiconStyle,{marginLeft:35}]}/><Text style={[styles.tabtextStule,{marginLeft:28}]}>Order</Text></View></TouchableOpacity>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('AProductList')}><View><FontAwesome5 name={'product-hunt'} style={[styles.tabiconStyle,{marginLeft:40}]}/><Text style={[styles.tabtextStule,{marginLeft:28}]}>Product</Text></View></TouchableOpacity>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('TCustomer')}><View><FontAwesome5 name={'baby'} style={[styles.tabiconStyle,{marginLeft:50}]}/><Text style={[styles.tabtextStule,{marginLeft:30}]}>Customer</Text ></View></TouchableOpacity>
           </View>
           <Modal visible={this.state.isVisiableModal} transparent={true}>
            <View style={{width:"60%",height:400,marginTop:59,backgroundColor:"lightyellow"}}>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('TDashboard')} ><View style={{flexDirection:"row",marginTop:20}}><Text style={styles.tabtextStule}>Dashboard</Text></View></TouchableOpacity>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('TOrder')}><View><Text style={[styles.tabtextStule,{marginTop:20}]}>Order</Text></View></TouchableOpacity>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('TCustomer')}><View><Text style={[styles.tabtextStule,{marginTop:20}]}>Customer</Text ></View></TouchableOpacity>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('TCustomer')}><View><Text style={[styles.tabtextStule,{marginTop:20}]}>Tailor</Text ></View></TouchableOpacity>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('TCustomer')}><View><Text style={[styles.tabtextStule,{marginTop:20}]}>Log Out</Text ></View></TouchableOpacity>
           </View>
           </Modal>
           
           </View>
           
           
        );
    }
}
export default Index;