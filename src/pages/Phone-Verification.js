/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, Button, Image, StyleSheet } from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class PhoneVerification extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/images/phone-verification.png')} style={styles.image} />
                <Text style={{fontSize:25, fontWeight:'bold', marginTop:160, color:'#158415'}}>
                   Phone Verification
                    </Text>
                    <Text style={{fontSize:20, marginTop:10}}>Enter your code here</Text>
                   
                   <Text style={{fontSize:12}}>OTP has been sent to your phone <Text style={{color:'#158415', fontWeight:'500'}}> Resend</Text></Text>
                   <View style={styles.getview}>
        <Button
            title="Verify Now"
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
        top:120,
        // marginBottom:20,
      },
      getview:{
        width: '60%',
        marginTop: 60,
      },
      btn : {
        marginRight: 40,
        fontSize:10,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
      },
});
