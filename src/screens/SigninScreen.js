import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';

const SigninScreen =({navigation})=>{
    return(
        <View>
            <Text style={styles.textStyle}>
               Signin Screen
            </Text>
            <Button title="Go to signup"  onPress={()=>navigation.navigate('Signup')}/>
        </View>
    )
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:48,
        alignContent:'center'
    }
});

export default SigninScreen;