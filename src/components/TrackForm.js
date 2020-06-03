import React,{useContext} from 'react';
import {Input,Button} from 'react-native-elements';
import Spacer from './Spacer';
import {Context as LocationContext} from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'


const TrackFrom=()=>{

    const {state:{name,recording,locations},
    startRecording,
    stopRecording,
    changeName} =useContext(LocationContext);

    const [saveTrack]=useSaveTrack();

    

    return(
        <>
        <Spacer>
        <Input value={name} onChangeText={changeName} placeholder="EnterTrackName"/>
        </Spacer>
        {recording
        ?<Button title="stop " onPress={stopRecording}/>
        :<Button title="Sart Recording" onPress={startRecording}/>
        }
        <Spacer/>
        {!recording && locations.length
         ?<Button title="Save Recording" onPress={saveTrack}/>
         :null
        }
        
        </>
    )
}
export default TrackFrom;