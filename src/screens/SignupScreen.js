import React, { useState, useContext, } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input, Button, Divider } from "react-native-elements";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/authContext";
import NavLink from "../components/NavLink";
import {NavigationEvents} from 'react-navigation'
import {SafeAreaView} from 'react-navigation';


const SignupScreen = ({ navigation }) => {
  const { state, signup ,clearErrorMessage} = useContext(AuthContext);
  
  return (
    
      <View style={styles.container}>
            <NavigationEvents  
            onWillFocus={()=>{clearErrorMessage}}
            />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign up"
        onSubmit={({ email, password }) => signup({ email, password })}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead"
      />
    </View>
    
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
  link: {
    color: "blue",
    marginLeft: 10,
    fontSize: 20,
    marginTop: 20,
  },
});

export default SignupScreen;
