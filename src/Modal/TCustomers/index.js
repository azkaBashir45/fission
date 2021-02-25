import React, { Component } from 'react';
import { Button, TextInput ,Card,Searchbar} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Text, View, ImageBackground, TouchableOpacity,ScrollView,Image } from 'react-native';
import { styles } from './Style';
class Index extends Component {
  constructor(props){
    super(props)
    this.state={
      search:""
    }
  }
    render() {
        return (
          <View style={styles.backgroungStyle}>
         
                 <View style={{ height: 56, backgroundColor: "#8a2be2",flexDirection:"row" }}>
                 <TouchableOpacity onPress={()=>this.props.navigation.navigate('menu')}><FontAwesome5  name={'bars'} style={{marginTop: 20, marginLeft: 20, color: "#ffff",fontsize:20}} /></TouchableOpacity><Text style={{ marginTop: 18, marginLeft: 20,fontSize:16, color: "#ffff" }}>Customer</Text>
          </View>
         
          <Searchbar style={styles.searchStyle}
      placeholder="Search"
      onChangeText={(search)=>this.setState({search:search})}
      value={this.state.search}
    />
    <View style={{flexDirection:"row",marginRight:20,marginLeft:20}}>
      <Text style={styles.title}>Order Id</Text>
      <Text style={[styles.title,{marginLeft:20}]}>No</Text>
      <Text style={[styles.title,{marginLeft:20}]}>Name</Text>
      <Text style={[styles.title,{marginLeft:20}]}>Delivery Date</Text>
    </View>
          
          
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