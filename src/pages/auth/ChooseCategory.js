/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, Button, Image, StyleSheet } from 'react-native';


export default class ChooseCategory extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/images/signup.png')} style={styles.image} />
                <Text style={{fontSize:25, fontWeight:'bold', marginTop:120}}>
                    Sign Up
                    </Text>
                    <Text style={{fontSize:20, marginTop:80}}>
                    choose category
                    </Text>
                    <View style={styles.getview}>
        <Button
            title="Driver"
            color="#158415"
          />
        </View>
        <View style={styles.getview}>
        <Button
            title="Client"
            color="#158415"
            style={styles.btn}
          />
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
      btn: {
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor:'red',
      },
      getview:{
        width: '60%',
        marginTop: 20,
      },
});
