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
                 <Text style={{marginTop:25,marginLeft:20,color:"#ffff"}}>More Options</Text>
              </View>
                 <ScrollView style={{height:585}}>
                 <Text style={{color:"#8a2be2",textAlign:"center",fontSize:16,fontWeight:"bold",marginTop:20}}>DO YOU WANT A POCKET</Text>
                 <Text style={{backgroundColor:"#fff",borderWidth:1,marginLeft:87,width:187,height:36,textAlign:"center",marginTop:13,textAlignVertical:"center"}}>NO POCKET</Text>
                 <Text style={{backgroundColor:"#fff",borderWidth:1,marginLeft:87,width:187,height:36,textAlign:"center",marginTop:8,textAlignVertical:"center"}}>LEFT CHEST </Text>
                 <Text style={{backgroundColor:"#fff",borderWidth:1,marginLeft:87,width:187,height:36,textAlign:"center",marginTop:8,textAlignVertical:"center"}}>TWO LEFT CHEST</Text>
                 <Text style={{color:"#8a2be2",textAlign:"center",fontSize:16,fontWeight:"bold",marginTop:20}}>Which Button STYLE WOULD YOU LIKE?</Text>
                 <View style={{flexDirection:"row"}}>
                 <Image style={[styles.imageStyle,{marginLeft:25}]} source={Image.enjoy}/>
                 <Image style={styles.imageStyle} source={Image.enjoy}/>
                 <Image style={styles.imageStyle} source={Image.enjoy}/>
                 </View>
                 <View style={{flexDirection:"row"}}>
                 <Image style={[styles.imageStyle,{marginLeft:60}]} source={Image.enjoy}/>
                 <Image style={[styles.imageStyle]} source={Image.enjoy}/>
                 </View>
                 <Text style={{color:"#8a2be2",textAlign:"center",fontSize:16,fontWeight:"bold",marginTop:20}}>WHERE DO YOU WEAR YOUR WATCH</Text>
                 <Text style={{backgroundColor:"#fff",borderWidth:1,marginLeft:87,width:187,height:36,textAlign:"center",marginTop:13,textAlignVertical:"center"}}>LEFT SIDE</Text>
                 <Text style={{backgroundColor:"#fff",borderWidth:1,marginLeft:87,width:187,height:36,textAlign:"center",marginTop:8,textAlignVertical:"center"}}>NO WATCH</Text>
                 <Text style={{backgroundColor:"#fff",borderWidth:1,marginLeft:87,width:187,height:36,textAlign:"center",marginTop:8,textAlignVertical:"center"}}>RIGHT SIDE</Text>
                 </ScrollView>
                   <Button style={{width:100,marginLeft:250,backgroundColor:"#8a2be2",marginTop:40}} mode="contained" onPress={() =>this.props.navigation.navigate('Cart')}>
                        Next
                   </Button>
            </View>
            </View>
        );
    }
}
export default Index;