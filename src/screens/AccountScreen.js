import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const AccountScreen =()=>{
    return(
        <View>
            <Text style={styles.textStyle}>
               Account Screen
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:48,
        alignContent:'center'
    }
});

export default AccountScreen;