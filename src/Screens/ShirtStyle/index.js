import React, { Component } from 'react';
// import { Card, Button } from 'react-native-paper';
import { Text, View, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Images } from "./../../Helper/Images"
import { styles } from './Style';
class Index extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "#fff" }}>
                <ScrollView>
                    <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Fabric')}><ImageBackground
                        style={styles.imageStyle} source={{ uri: "https://ae01.alicdn.com/kf/HTB1f1SFIpXXXXaTXVXXq6xXFXXX6/Handsome-men-shirt-spring-and-summer-wear-leisure-business-office-of-the-long-sleeved-young-man.jpg" }}>
                        <Text style={[styles.textStyle, { marginTop: 155 }]}>SHIRTS</Text>
                    </ImageBackground>
                    </TouchableOpacity>
                    <ImageBackground
                        style={styles.imageStyle} source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/61zgvsF-agL._UL1100_.jpg" }}>
                        <Text style={[styles.textStyle, { marginTop: 155 }]}>Long Sleeves</Text>
                    </ImageBackground>
                    <ImageBackground
                        style={styles.imageStyle} source={{ uri: "https://b-edge.friartux.com/f00000000189637/www.friartux.com/pub/media/magefan_blog/2016/08/San-Diego-outdoor-wedding-groom-dark-navy-blue-suit-with-long-ivory-tie.jpg" }}>
                        <Text style={[styles.textStyle, { marginTop: 200, color: "#fff" }]}>SUITS</Text>
                    </ImageBackground>
                    <ImageBackground
                        style={styles.imageStyle} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzz8diaVKgb9TGOIsLiXeVtuBRUnT3Zjgqag&usqp=CAU" }}>
                        <Text style={[styles.textStyle, { marginTop: 155 }]}>Half Sleeves</Text>
                    </ImageBackground>
                </ScrollView>
            </View>
        );
    }
}
export default Index;