import React, { Component } from 'react';
// import { Card, Button } from 'react-native-paper';
import { Container, Header, Content, Picker, Form } from "native-base";
import { Text, View, ImageBackground, Image, ScrollView, TouchableOpacity , Dimensions} from 'react-native';
import { styles } from './Style';
class Index extends Component {
    state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
    render() {
        return (
            <View style={{ backgroundColor: "#fff" }}>
              <Container>
        <Header />
        <Content>
          <Form>
            <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.user}
              onValueChange={this.updateUser}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Form>
        </Content>
      </Container>
              </View>
      
        );
    }
}
export default Index;