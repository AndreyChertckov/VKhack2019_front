import React, { useState } from 'react';
import { View,Text } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, CheckBox } from 'react-native-elements';

export default function Test() {
    const [heartDesease, setHeartDeasease] = useState(false);
    const [hypertension, setHypertension] = useState(false);
    const [diabetes, setDiabetes] = useState(false);
    const [vascularDesease, setVascularDesease] = useState(false);
    const [heridity, setHeridity] = useState(false);
    const [smoking, setSmoking] = useState(false);
    const [drnking, setDrinking] = useState(false);
    const [age, setAge] = useState(0);
    const [sports, setSports] = useState('low');
    const [stress, setStress] = useState('low');

    return (
        <View>
            <CheckBox title='Проблемы с сердцем' checked={heartDesease} onPress={(e) => {console.log(e); setHeartDeasease(true)}}/>
        </View>
    )
}