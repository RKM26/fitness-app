import React,{useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Button,Input,Divider} from 'react-native-elements';
import Spacer from "./Spacer";

const authForm=({headerText,errorMessage,onSubmit,submitButtonText})=>{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    return(
        <>
            <Spacer>
        <Text h3>{headerText} for Tracker</Text>
      </Spacer>
      <Spacer />
      <Input
        label="Email"
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage?<Text style={styles.errorMessage}>{errorMessage}</Text>:null}
      <Spacer>
        <Button title={submitButtonText} onPress={()=>onSubmit({email,password})}/>
      </Spacer>
      <Divider style={{ backgroundColor: 'blue' }} />
        </>
    )

}

const styles=StyleSheet.create({
    errorMessage:{
        fontSize:16,
        color:'red',
        marginLeft:15,
        marginTop:15
    }, 
});

export default authForm;