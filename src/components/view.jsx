import React from "react";
import {t} from 'react-native-tailwindcss';
import styled from 'styled-components';
import { View } from 'react-native';

//modules
import { Header, SubText } from "./Text";

const VerFlexView = styled(View)`
    background-color : #EFF3F4;
    ${[t.flexCol, t.mX3, t.mB3, t.pT2, t.pB2, t.pL2, t.roundedLg ]};
`

function MView(props){

    return(
        <VerFlexView>
            <Header />
            <SubText />
        </VerFlexView>
    )
}

export default MView