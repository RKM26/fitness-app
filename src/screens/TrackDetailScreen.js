import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const TrackDetailScreen =()=>{
    return(
        <View>
            <Text style={styles.textStyle}>
                TrackDetail Screen
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

export default TrackDetailScreen;