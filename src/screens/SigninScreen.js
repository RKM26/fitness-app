import React,{useContext} from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';
import AuthForm from '../components/AuthForm';
import {NavigationEvents} from 'react-navigation';
import NavLink from '../components/NavLink';
import {SafeAreaView} from 'react-navigation';
import { Context as AuthContext } from "../context/authContext";

const SigninScreen =({navigation})=>{

    const {state,signin,clearErrorMessage}=useContext(AuthContext);
    return(
        
        <View style={styles.container}>
            <NavigationEvents  
            onWillFocus={()=>{clearErrorMessage}}
            />
        <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={({ email, password }) => signin({ email, password })}
      />
      <NavLink
        routeName="Signup"
        text="Dont have an account? Sign up first"
      />
      </View>
      
    )
}

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles=StyleSheet.create({
  
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200,
      },
});

export default SigninScreen;