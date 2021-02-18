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
                 <Text style={{marginTop:25,marginLeft:20,color:"#ffff"}}>COLLAR</Text>
              </View>
             
                <ScrollView style={{height:630}} scrollEnabled>
                  <Text style={{color:"#8a2be2",alignSelf:"center",marginTop:10,fontSize:16,fontWeight:"bold"}}>SELECT YOUR COLLAR STYLE</Text>
                    <Card style={{width:340,height:320,borderRadius:10,marginLeft:10}}>
                      <Image style={{width:330,height:200,marginTop:15,marginLeft:5}} source={Images.enjoy}></Image>
                      <Card.Content></Card.Content>
                    </Card>
                    <Card style={{width:340,height:320,borderRadius:10,marginLeft:10,marginTop:20}}>
                      <Image style={{width:330,height:200,marginTop:15,marginLeft:5}} source={Images.enjoy}></Image>
                      <Card.Content></Card.Content>
                    </Card>
                    <Card style={{width:340,height:320,borderRadius:10,marginLeft:10,marginTop:20}}>
                      <Image style={{width:330,height:200,marginTop:15,marginLeft:5}} source={Images.enjoy}></Image>
                      <Card.Content></Card.Content>
                    </Card>
                    <Card style={{width:340,height:320,borderRadius:10,marginLeft:10,marginTop:20}}>
                      <Image style={{width:330,height:200,marginTop:15,marginLeft:5}} source={Images.enjoy}></Image>
                      <Card.Content></Card.Content>
                    </Card>
                   </ScrollView>
                   <Button style={{width:100,marginLeft:250,backgroundColor:"#8a2be2"}} mode="contained" onPress={() => this.props.navigation.navigate('Cuff')}>
                        Next
                   </Button>
            </View>
            </View>
        );
    }
}
export default Index;