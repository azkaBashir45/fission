import React, { Component } from 'react';
import { Button, TextInput ,Card} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Text, View, ImageBackground, TouchableOpacity,ScrollView,Image ,Modal} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { styles } from './Style';
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            HeadTable: ['No#', 'Name', 'Delievery Date'],
            DataTable: [
              ['1', 'usama', '19-2-2000'],
             
             
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
         
         
           </View>
           
           
        );
    }
}
export default Index;