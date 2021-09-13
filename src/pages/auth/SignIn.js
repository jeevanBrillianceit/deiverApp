/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, Button, Image, StyleSheet } from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class SignIn extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/images/signup.png')} style={styles.image} />
                <Text style={{fontSize:25, fontWeight:'bold', marginTop:120}}>
                    Sign In
                    </Text>
                    <View>
         {/* <FontAwesome5 name={'google'}/> */}
        </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        top:100,
        // marginBottom:20,
      },
});