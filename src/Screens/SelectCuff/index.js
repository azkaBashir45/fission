import React, { Component } from 'react';
// import { Card, Button } from 'react-native-paper';
import { Text, View, ImageBackground, Image, ScrollView, TouchableOpacity, Picker } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { Images } from "./../../Helper/Images";
import { styles } from './Style';
class Index extends Component {
  state = { user: '' }
  updateUser = (user) => {
    this.setState({ user: user })
  }
  render() {
    return (
      <View style={{ backgroundColor: "#D8D8D8", height: 720 }}>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={{ height: 56, backgroundColor: "#8a2be2" }}>
            <Text style={{ marginTop: 25, marginLeft: 20, color: "#ffff" }}>Cuff</Text>
          </View>

          <ScrollView style={{ height: 630 }} scrollEnabled>
            <Text style={{ color: "#8a2be2", alignSelf: "center", marginTop: 10, fontSize: 16, fontWeight: "bold" }}>SELECT YOUR Cuff STYLE</Text>
            <Card style={{ width: 340, height: 320, borderRadius: 10, marginLeft: 10 }}>
              <Image style={{ width: 330, height: 230, marginTop: 15, marginLeft: 5 }} source={Images.FrenchCuff}></Image>
              <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 15, textAlign: "center" }}>French Cuff</Text>
              <Text style={{ fontSize: 14, marginTop: 4, textAlign: "center" }}>For use with some classy cuff links</Text>

            </Card>
            <Card style={{ width: 340, height: 320, borderRadius: 10, marginLeft: 10, marginTop: 20 }}>
              <Image style={{ width: 330, height: 230, marginTop: 15, marginLeft: 5 }} source={Images.OneButtonRounded}></Image>
              <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 15, textAlign: "center" }}>One Button Round</Text>
              <Text style={{ fontSize: 14, marginTop: 4, textAlign: "center" }}>Works with anything</Text>
            </Card>
            <Card style={{ width: 340, height: 320, borderRadius: 10, marginLeft: 10, marginTop: 20 }}>
              <Image style={{ width: 330, height: 230, marginTop: 15, marginLeft: 5 }} source={Images.TwoButtonAngled}></Image>
              <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 15, textAlign: "center" }}>Two Buttons Angled</Text>
              <Text style={{ fontSize: 14, marginTop: 4, textAlign: "center" }}>Slightly stylish but still a safe bet</Text>
            </Card>
          </ScrollView>
          <Button style={{ width: 100, marginLeft: 250, backgroundColor: "#8a2be2" }} mode="contained" onPress={() => this.props.navigation.navigate('Length')}>
            Next
                   </Button>
        </View>
      </View>
    );
  }
}
export default Index;