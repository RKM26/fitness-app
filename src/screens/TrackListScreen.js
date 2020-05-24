import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';

const TrackListScreen =({navigation})=>{
    return(
        <View>
            <Text style={styles.textStyle}>
                TrackList Screen
            </Text>
            <Button title="Go to Track Detail"  onPress={()=>navigation.navigate('TrackDetail')}/>
        </View>
    )
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:48,
        alignContent:'center'
    }
});

export default TrackListScreen;