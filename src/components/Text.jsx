import React from "react";
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components';
import { Text } from 'react-native';

const MoNoText = styled(Text)`
    ${[t.fontMono]}
`

const HText = styled(MoNoText)`
    ${[t.textXl, t.mB4, t.fontBold	]}
`

const SText = styled(MoNoText)`
    ${[t.textBase]}
`

export function Header(){
    return (
        <HText>전북대 할리스</HText>
    )
}

export function SubText(){
    return (
        <SText>0632241994</SText>
    )
}