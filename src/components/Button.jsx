import React from "react";
import {Button, TouchableOpacity} from 'react-native';
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components';

const CButton = styled(TouchableOpacity)`
    ${[t.roundedFull, t.w1_3]}
`

export function CirecleButton(props){
    return (
        <CButton style={{backgroundColor : '#b794f4'}}>
            {props.children}
        </CButton>
    )
}
