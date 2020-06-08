import React, { useContext } from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {SafeAreaView} from 'react-navigation';
import {Context as AuthContext} from '../context/authContext';
import {FontAwesome} from '@expo/vector-icons'

const AccountScreen =()=>{

    const {signout}=useContext(AuthContext);
    return(
    <SafeAreaView forceInset={{top:'always'}}>
        <Text style={styles.textStyle}>Logout ?</Text>
        <Spacer>   
                 <Button title="Sign Out" onPress={signout} />
        </Spacer>
    </SafeAreaView>
    )
}

AccountScreen.navigationOptions={
    title:'Account',
    tabBarIcon:<FontAwesome name="gear" size={20}/>
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:48,
        alignContent:'center'
    }
});

export default AccountScreen;