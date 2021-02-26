import React, { Component } from 'react';
import { Button, TextInput ,Card} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Text, View, ImageBackground, TouchableOpacity,ScrollView,Image ,Modal} from 'react-native';
import { styles } from './Style';
import { Images } from '../../Helper/Images';
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
                 <TouchableOpacity onPress={()=>this.setState({isVisiableModal:true})}><FontAwesome5  name={'bars'} style={{marginTop: 20, marginLeft: 20, color: "#ffff",fontsize:20}} /></TouchableOpacity><Text style={{ marginTop: 18, marginLeft: 20,fontSize:16, color: "#ffff" }}>Add Product</Text>
          </View>
          <View >
           <Image style={styles.imageStyle} source={Images.enjoy} />
           <TextInput style={styles.inputStyle}
           label="Product Name"
           ></TextInput>
           <TextInput style={styles.inputStyle}
           label="Category Choose"
           ></TextInput>
          <TextInput style={styles.inputStyle}
           label="Price"
           ></TextInput>
            <Button  style={styles.buttonStyle} mode="contained" onPress={() => console.log('Pressed')}>
                Save
  </Button>
          </View>
          <Modal visible={this.state.isVisiableModal} transparent={true}>
            <View style={{width:"50%",height:400,marginTop:59,backgroundColor:"yellow"}}>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('TDashboard')} ><TouchableOpacity onPress={()=>this.setState({isVisiableModal:false})} ><View style={{flexDirection:"row"}}><FontAwesome5 name={'tachometer-alt'} style={styles.tabiconStyle}></FontAwesome5><Text style={styles.tabtextStule}>Dashboard</Text></View></TouchableOpacity></TouchableOpacity>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('TOrder')}><View><FontAwesome5 name={'first-order'} style={[styles.tabiconStyle,{marginLeft:60}]}/><Text style={[styles.tabtextStule,{marginLeft:56}]}>Order</Text></View></TouchableOpacity>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('TCustomer')}><View><FontAwesome5 name={'baby'} style={[styles.tabiconStyle,{marginLeft:70}]}/><Text style={[styles.tabtextStule,{marginLeft:52}]}>Customer</Text ></View></TouchableOpacity>
           </View>
           </Modal>
           
       
         
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