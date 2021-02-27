import React, { Component } from 'react';
import { Button, TextInput ,Card} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Text, View, ImageBackground, TouchableOpacity,ScrollView,Image ,Modal} from 'react-native';
import { styles } from './Style';
import { Title } from 'native-base';
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isVisiableModal: false,
        HeadTable: ['No#', 'Name', 'Price'],
        DataTable: [
          ['1', 'Shirt', '334'],
          ['2', 'Kurta', '334'],
         
        ]
    }
  }
    render() {
        return (
          <View style={styles.backgroungStyle}>
          
          <Table borderStyle={{borderWidth: 1, borderColor: '#8a2be2'}}>
         <Row data={this.state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
         <TouchableOpacity onPress={()=>this.setState({isVisiableModal:true})}><Rows data={this.state.DataTable} textStyle={{marginLeft:10}} /></TouchableOpacity>
        </Table>
         
          <Modal visible={this.state.isVisiableModal} transparent={true}>
            <View style={{width:"100%",height:550,marginTop:200,backgroundColor:"#fef6ff",borderTopLeftRadius:40}}>
          <FontAwesome5 name={'product-hunt'} style={styles.iconStyle}/>
         <Card style={{width:300,height:150,borderWidth:1,backgroundColor:"#eeeeee",borderRadius:20,marginLeft:30,borderColor:"#eeeeee",marginTop:20}}>
           <Text style={{marginLeft:40,marginTop:30,fontSize:20,fontWeight:"bold"}}>Shirt</Text>
           <View style={{width:150,backgroundColor:"#fff",marginLeft:70,marginTop:20,height:56,borderRadius:10,padding:10}}>
             <Text style={{fontSize:16,fontWeight:"bold"}}>Price</Text>
                 <Text  style={{fontSize:16,textAlign:"center"}}>250</Text>
           </View>
         </Card>
         <View style={{flexDirection:"row"}}>
         <Button  style={[styles.buttonStyle,{backgroundColor:"red"}]} mode="contained" onPress={() => console.log('Pressed')}>
                Delete
           </Button>
           <Button  style={[styles.buttonStyle,{backgroundColor:"#7d93c8"}]} mode="contained" onPress={() => console.log('Pressed')}>
                Edit
           </Button>
           </View>
           </View>
           </Modal>
           
           </View>
           
           
           
        );
    }
}
export default Index;