import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {devicesHeight, devicesWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import {API_KEY} from './Constants';

const Details = props => {
  const [data, setdata] = useState();
  const {name} = props.route.params;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(res => setdata(res))
      .catch(err => console.error(err));
  }, []);


  const Data = ({title, value}) =>{
    return(
    <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 22}}>{title}</Text>
                <Text style={{color: 'white', fontSize: 22}}>
                  {value}
                </Text>
              </View>)
  }

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
        {data ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: devicesHeight - 100,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 40}}>{name}</Text>
              <Text style={{color: 'white', fontSize: 22, textAlign: 'center '}}>
                {data['weather'][0]['main']}
              </Text>
            </View>

            <Text style={{color: 'white', fontSize: 65}}>
              {(data['main']['temp'] - 273).toFixed(2)}&deg; C
            </Text>


        <View>
        <Text style={{color: 'white', fontSize: 22, marginBottom: 16}}>Weather Details</Text>
            <View style={{width: devicesWidth - 60}}>
              <Data value={data['wind']['speed']} title='Wind' />

              <Data value={data['main']['pressure']} title='Pressure' /> 

              <Data value={`${data['main']['humidity']} %`} title='Humidity' />

              <Data value={data['visibility']} title='Visibility' />
            </View>
        </View>

           
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});



