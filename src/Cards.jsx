import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {devicesHeight, devicesWidth} from './Dimensions';
import {white} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const Cards = ({name, image, navigation}) => {
  return (
    <TouchableOpacity
      style={{marginHorizontal: 10}}
      onPress={() => navigation.navigate('Details', {name})}>
      <ImageBackground
        source={image}
        style={{height: devicesHeight / 5, width: devicesWidth / 2 - 50}}
        imageStyle={{borderRadius: 16, opacity: 0.8, backgroundColor: 'black'}}
      />
      <View style={{position: 'absolute', width: '100%', height: '100%'}}>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            width: '100%',
            height: '100%',
            textAlignVertical: 'center',
            color: 'white',
            fontWeight: '800',
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;

const styles = StyleSheet.create({});
