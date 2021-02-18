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
            <Text style={{ marginTop: 25, marginLeft: 20, color: "#ffff" }}>FABRIC</Text>
          </View>
          <ScrollView horizontal style={{ height: 56, backgroundColor: "#535353" }}>
            <Picker style={{ backgroundColor: "#fff", width: 100 }}
              selectedValue={this.state.user}
              style={{ height: 50, width: 150 }}
              onValueChange={this.updateUser}>
              <Picker.Item style={{ backgroundColor: "#fff" }} label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
            <Picker style={{ backgroundColor: "#fff" }}
              selectedValue={this.state.user}
              style={{ height: 50, width: 150 }}
              onValueChange={this.updateUser}>
              <Picker.Item style={{ backgroundColor: "#fff" }} label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
            <Picker style={{ backgroundColor: "#fff" }}
              selectedValue={this.state.user}
              style={{ height: 50, width: 150 }}
              onValueChange={this.updateUser}>
              <Picker.Item style={{ backgroundColor: "#fff" }} label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </ScrollView>
          <ScrollView style={{ height: 572 }} scrollEnabled>
            <Text style={{ color: "#8a2be2", alignSelf: "center", marginTop: 10, fontSize: 16, fontWeight: "bold" }}>SELECT YOUR FABRIC</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity><Card style={{ width: 170, height: 300, borderRadius: 10 }}>
                <Image style={{ width: 160, height: 200, marginTop: 15, marginLeft: 5 }} source={Images.shirt1}></Image>
                <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 25, textAlign: "center" }}>Hula Chambray</Text>
                <Text style={{ fontSize: 14, marginTop: 4, textAlign: "center" }}>$89</Text>
              </Card>
              </TouchableOpacity>
              <TouchableOpacity><Card style={{ width: 170, height: 300, marginLeft: 10, borderRadius: 10 }}>
                <Image style={{ width: 160, height: 200, marginTop: 15, marginLeft: 5 }} source={Images.shirt2}></Image>
                <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 25, textAlign: "center" }}>Hula Chambray</Text>
                <Text style={{ fontSize: 14, marginTop: 4, textAlign: "center" }}>$89</Text>
              </Card>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <TouchableOpacity><Card style={{ width: 170, height: 300, borderRadius: 10 }}>
                <Image style={{ width: 160, height: 200, marginTop: 15, marginLeft: 5 }} source={Images.shirt3}></Image>
                <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 25, textAlign: "center" }}>Hula Chambray</Text>
                <Text style={{ fontSize: 14, marginTop: 4, textAlign: "center" }}>$89</Text>
              </Card>
              </TouchableOpacity>
              <TouchableOpacity><Card style={{ width: 170, height: 300, marginLeft: 10, borderRadius: 10 }}>
                <Image style={{ width: 160, height: 200, marginTop: 15, marginLeft: 5 }} source={Images.shirt4}></Image>
                <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 25, textAlign: "center" }}>Hula Chambray</Text>
                <Text style={{ fontSize: 14, marginTop: 4, textAlign: "center" }}>$89</Text>
              </Card>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <TouchableOpacity><Card style={{ width: 170, height: 300, borderRadius: 10 }}>
                <Image style={{ width: 160, height: 200, marginTop: 15, marginLeft: 5 }} source={Images.shirt5}></Image>
                <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 25, textAlign: "center" }}>Hula Chambray</Text>
                <Text style={{ fontSize: 14, marginTop: 4, textAlign: "center" }}>$89</Text>
              </Card>
              </TouchableOpacity>
              <TouchableOpacity><Card style={{ width: 170, height: 300, marginLeft: 10, borderRadius: 10 }}>
                <Image style={{ width: 160, height: 200, marginTop: 15, marginLeft: 5 }} source={Images.shirt2}></Image>
                <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 25, textAlign: "center" }}>Hula Chambray</Text>
                <Text style={{ fontSize: 14, marginTop: 4, textAlign: "center" }}>$89</Text>
              </Card>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <Button style={{ width: 100, marginLeft: 250, backgroundColor: "#8a2be2" }} mode="contained" onPress={() => this.props.navigation.navigate('Collar')}>
            Next
                   </Button>
        </View>
      </View>
    );
  }
}
export default Index;