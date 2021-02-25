import React, { Component } from 'react';
// import { Card, Button } from 'react-native-paper';
import { Text, View, ImageBackground, Image, ScrollView, TouchableOpacity,Picker} from 'react-native';
 import { Card,Button} from 'react-native-paper';
import { Images } from "./../../Helper/Images";
import { styles } from './Style';
class Index extends Component {
    state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
    render() {
        return (
          <View style={{backgroundColor:"#D8D8D8",height:720}}>
            <View style={{ backgroundColor: "#fff" }}>
              <View  style={{height:56,backgroundColor:"#8a2be2"}}>
                 <Text style={{marginTop:25,marginLeft:20,color:"#ffff"}}>Cart</Text>
              </View>
                 <Text>Tota: $84</Text>
                 <Card>
                   <View style={{flexDirection:"row"}}>
                   <Image style={styles.imageStyle}/>
                   <View><Text>FabricType</Text>
                   <Text>Shirt</Text>
                   <Text>Quantity :1 $56</Text>
                   </View>
                   <Button style={{width:100,backgroundColor:"#8a2be2"}} mode="contained" onPress={() =>this.props.navigation.navigate('Length')}>
                        Next
                   </Button>
                   </View>
                 </Card>
                   
    
            </View>
            </View>
        );
    }
}
export default Index;