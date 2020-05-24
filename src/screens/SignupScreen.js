import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';

const SignupScreen =({navigation})=>{
    return(
        <View>
            <Text style={styles.textStyle}>
               Signup Screen
            </Text>
            <Button title="Go to signin"  onPress={()=>navigation.navigate('Signin')}/>
            <Button title="Go to main flow"  onPress={()=>navigation.navigate('mainFlow')}/>
        </View>
    )
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:48,
        alignContent:'center'
    }
});

export default SignupScreen;