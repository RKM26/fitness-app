import React,{useContext} from 'react';
import {Input,Button} from 'react-native-elements';
import Spacer from './Spacer';
import {Context as LocationContext} from '../context/LocationContext'
const TrackFrom=()=>{

    const {state:{name,recording,locations},
    startRecording,
    stopRecording,
    changeName} =useContext(LocationContext);

    console.log(locations.length);
    

    return(
        <>
        <Spacer>
        <Input value={name} onChangeText={changeName} placeholder="EnterTrackName"/>
        </Spacer>
        {recording
        ?<Button title="stop " onPress={stopRecording}/>
        :<Button title="Sart Recording" onPress={startRecording}/>
        }
        
        </>
    )
}
export default TrackFrom;