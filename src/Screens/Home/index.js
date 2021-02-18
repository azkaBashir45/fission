import React, { Component } from 'react';
// import { Card, Button } from 'react-native-paper';
import { Text, View, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Images } from "./../../Helper/Images"
import { styles } from './Style';
class Index extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "#fff" }}>
                <ScrollView horizontal
                    scrollEnabled
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}>
                    <ImageBackground
                        style={styles.imageStyle} source={Images.hom1}>
                        <Text style={[styles.textStyle, { marginTop: 220, marginLeft: 150 }]}>Custom Clothes</Text><Text style={[styles.textStyle, { marginLeft: 130 }]}>Guarnteed Fit</Text>
                    </ImageBackground>
                    <View style={{ width: 360 }}>
                        <Text style={styles.titleStyle}>Customize</Text>
                        <Text style={[styles.texttypeStyle, { marginTop: 20 }]}>Pick your favourite fabric,collar style</Text><Text style={styles.texttypeStyle}>,button,thread color,and more</Text>
                        <View style={{ marginTop: 100, flexDirection: "row", marginLeft: 40 }}>
                            <Image style={styles.shirtImageStyle} source={Images.shirt1} />
                            <Image style={styles.shirtImageStyle} source={Images.shirt2} />
                        </View>
                        <View style={{ marginTop: 50, flexDirection: "row" }}>
                            <Image style={styles.shirtImageStyle} source={Images.shirt3} />
                            <Image style={styles.shirtImageStyle} source={Images.shirt4} />
                            <Image style={[styles.shirtImageStyle, { width: 70 }]} source={Images.shirt5} />
                        </View>
                    </View>
                    <View>
                        <ImageBackground
                            style={styles.imageStyle} source={Images.enjoy}>
                            <Text style={[styles.textStyle, { marginTop: 20, marginLeft: 10, color: "#00000" }]}>Enjoy</Text><Text style={[{ marginLeft: 50, fontSize: 18, marginTop: 10 }]}>The best fitting clothes in your closet</Text>
                            <Text style={[{ marginLeft: 80, fontSize: 18, marginTop: 2 }]}>Free returns on all orders</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign')}><Text style={{ marginTop: 575, fontSize: 25, fontWeight: "bold", marginLeft: 270, color: "#8a2be2" }}>Login</Text></TouchableOpacity>
                        </ImageBackground>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default Index;