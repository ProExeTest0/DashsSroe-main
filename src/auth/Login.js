//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import icon from '../helper/Iconconstats';
import {Button} from 'react-native';
import Textinputevent from '../components/TextInput';
import Btn from '../components/Btn';
import {Or} from '../helper/String';
import {useNavigation} from '@react-navigation/native';

// create a component
const Login = ({navigation}) => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.tabimage} source={icon.loginlogo} />
      <View style={{bottom: 70}}>
        <Textinputevent place={'email'} />
        <Textinputevent place={'passwod'} />
        <Btn text={'LOGIN'} onpress={'feed'} />
        <View>
          <View
            style={{
              height: 1,
              width: '95%',
              backgroundColor: 'black',
              marginHorizontal: 10,
              marginVertical: 10,
            }}></View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={styles.textstl}>{Or}</Text>
            <TouchableOpacity onPress={() => navigate('signup')}>
              <Text style={{color: 'blue'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* <Button title="Login" onPress={() => navigation.navigate('feed')} /> */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabimage: {
    height: 50,
    width: 200,
    bottom: 120,
  },
  textstl: {
    textAlign: 'center',
  },
});

//make this component available to the app
export default Login;
