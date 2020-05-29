//import '../_mockLocation';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Map from '../components/Map';
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation';
import { requestPermissionsAsync,watchPositionAsync,Accuracy } from 'expo-location';



const TrackCreateScreen = () => {

    const [err, setErr] = useState(null);
    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy:Accuracy.BestForNavigation,
                timeInterval:1000,
                distanceInterval:10
            },(location)=>{
                console.log(location);
                
            })

        } catch (e) {
            setErr(e)
        }
    }

    useEffect(() => {
        startWatching();
    }, [])

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3>Create a Track</Text>
            <Map />
            {err ? <Text>chech permission</Text> : null}
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    textStyle: {
        fontSize: 48,
        alignContent: 'center'
    }
});

export default TrackCreateScreen;