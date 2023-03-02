import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {devicesHeight, devicesWidth} from './Dimensions';
// icons
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';

const Home = props => {
  const [city, setcity] = useState('');

  const cities = [
    {
      name: 'Karachi',
      image: require('../assets/images/multan.jpg'),
    },
    {
      name: 'Lahore',
      image: require('../assets/images/badshahi.jpg'),
    },
    {
      name: 'Islamabad',
      image: require('../assets/images/islamabad.jpg'),
    },
    {
      name: 'Multan',
      image: require('../assets/images/khyber pass.jpg'),
    },
  ];

  return (
    <View>
      <ImageBackground
        source={require('../assets/images/bg.jpg')}
        style={{height: devicesHeight, width: devicesWidth}}
        imageStyle={{opacity: 0.8, backgroundColor: 'black'}}
      />

      <View
        style={{
          position: 'absolute',
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: devicesWidth - 20,
          }}>
          <Icon name="menu" size={46} color="white" />
          <Image
            source={require('../assets/images/userpic.png')}
            style={{height: 50, width: 50}}
          />
        </View>

        <View style={{paddingHorizontal: 20, marginTop: 100}}>
          <Text style={{fontSize: 40, color: 'white'}}>Hello Hasnain</Text>
          <Text style={{fontSize: 22, color: 'white'}}>
            Search the city name ..
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
              marginTop: 16,
              paddingHorizontal: 10,
            }}>
            <TextInput
              placeholder="search any city"
              placeholderTextColor="white"
              style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
              value={city}
              onChangeText={e => setcity(e)}
            />
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Details', {name: city})
              }>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: 'white',
              fontSize: 25,
              paddingHorizontal: 10,
              marginTop: 150,
              marginBottom: 20,
            }}>
            My Location
          </Text>

          <FlatList
            data={cities}
            horizontal
            renderItem={({item}) => (
              <Cards
                name={item.name}
                image={item.image}
                navigation={props.navigation}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
