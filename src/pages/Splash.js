/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Splash = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textTitle}>WELCOME to</Text>
        <Image source={require('../assets/images/Vectorsplash.png')}
          style={styles.image} />
        <Text style={styles.textBody}>Car Driving</Text>
        <View  style={styles.getview}>
          <Button 
          titleStyle={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold"
        }}
            title="Get Started"
            color="#158415"
          />
        </View>
        <View>
          <Image source={require('../assets/images/Vector-splash-screen.png')}
            style={styles.image2}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 80,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  image2: {
    width: 420,
    height: 200,
    marginTop: 152,
  },
  textTitle: {
    marginTop: 100,
    fontFamily: 'Foundation',
    fontSize: 26,
  },
  textBody: {
    fontFamily: 'Roboto',
    fontSize: 26,
    marginBottom: 50,
    fontWeight: 'bold',
  },
  getview:{
    width: "60%",
    // height: 70,
    marginTop: 20,
  },
});

export default Splash;