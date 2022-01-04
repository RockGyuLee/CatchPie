import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';

//modules
import MView from './components/view';
import {Header} from './components/Text'

function Main(){
    const count = [1,2,3,4,5,6,7,8,9,10,11,12];

    return (
        <ScrollView>
            {
                count.map( (i, idx ) =>{
                    return (
                        <MView key={idx}/>
                    )
                })
            }
            <MView />
        </ScrollView>
    )
}

export default Main