import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function Index(props){
   
        return(
            <Appbar.Header>
            <Appbar.Content title={props.name} />
            
          </Appbar.Header>
        );
    }
