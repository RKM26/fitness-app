import '../_mockLocation';
import React, { useCallback,useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import Map from '../components/Map';
import { Text } from 'react-native-elements'
import { SafeAreaView,NavigationEvents ,withNavigationFocus} from 'react-navigation';
import {Context as LocationContext} from '../context/LocationContext'
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = ({isFocused}) => {

    const {state:{recording},addLocation}=useContext(LocationContext);
    const callback=useCallback((location)=>{
        addLocation(location,recording)
    },[recording])

    const [err]=useLocation(isFocused || recording,callback)
  

    
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3>Create a Track</Text>
            <Map />
            
            
            {err ? <Text>chech permission</Text> : null}
            <TrackForm/>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    textStyle: {
        fontSize: 48,
        alignContent: 'center'
    }
});

export default withNavigationFocus(TrackCreateScreen);