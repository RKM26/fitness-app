import React,{useContext} from 'react';
import {FlatList,TouchableOpacity,StyleSheet,Text} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Context as TrackContext} from '../context/TrackContext'
import {ListItem} from 'react-native-elements';
import Spacer from '../components/Spacer'

const TrackListScreen =({navigation})=>{

    const {state,fetchTrack}=useContext(TrackContext)

    return(
        <>
    <NavigationEvents onWillFocus={()=>fetchTrack()}/>
            
            <FlatList 
            data={state}
            keyExtractor={item=>item._id}
            renderItem={({item})=>{
                return <TouchableOpacity onPress={()=>
                navigation.navigate('TrackDetail',{_id:item._id})}>
                    <ListItem
                    chevron
                    title={item.name}
                    />
                    <Spacer/>
                </TouchableOpacity>
            }}

            />
        </>
    )
}

TrackListScreen.navigationOptions={
    Titile:'Tracks'
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:48,
        alignContent:'center'
    }
});

export default TrackListScreen;