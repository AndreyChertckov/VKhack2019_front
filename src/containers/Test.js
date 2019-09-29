import React, { useState, useEffect } from 'react';
import { ScrollView, Text, AsyncStorage } from 'react-native';
import { Input, CheckBox, ButtonGroup, Button } from 'react-native-elements';

export default function Test(props) {
	const [name, setName] = useState('')
	const [heartDesease, setHeartDeasease] = useState(false);
	const [hypertension, setHypertension] = useState(false);
	const [diabetes, setDiabetes] = useState(false);
	const [vascularDesease, setVascularDesease] = useState(false);
	const [heridity, setHeridity] = useState(false);
	const [smoking, setSmoking] = useState(false);
	const [drinking, setDrinking] = useState(false);
	const [age, setAge] = useState(0);
	const [sports, setSports] = useState(0);
	const [stress, setStress] = useState(0);

	useEffect(() => {
		fetch('http://95.213.38.134:8080/api/user/' + props.userToken + '/get').then((resp) => {
			return resp.json();
		}).then((data) => {
			console.log(data);
			setSmoking(data['smoking']);
			setDrinking(data['drinking']);
			setName(data['name']);
		});
	}, []);

	function submit() {
		fetch('http://95.213.38.134:8080/api/user/' + props.userToken, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: name,
				heart_desease: heartDesease,
				hypertension: hypertension,
				diabetes: diabetes,
				vascular_desease: vascularDesease,
				heridity: heridity,
				smoking: smoking,
				drinking: drinking,
				age: age,
				sports: sports,
				stress: stress
			})
		}).then((response) => {
			return response.json()
		}).then((data) => {
			AsyncStorage.setItem('token', '' + props.userToken).then(() => {
				props.goToMainView();
			});
		})
	}

	return (
		<ScrollView>
			<Input
				containerStyle={{ width: '100%' }}
				label="Ваше имя"
				labelStyle={{ marginTop: 16 }}
				onChangeText={(text) => { setName(text) }}
				inputStyle={{ color: "#ffffff" }}
				value={name}
			/>
			<Input
				containerStyle={{ width: '100%' }}
				label="Ваш возвраст"
				labelStyle={{ marginTop: 16 }}
				onChangeText={(text) => { setAge(+text) }}
				inputStyle={{ color: "#ffffff" }}
				value={'' + age}
			/>
			<CheckBox title='У вас есть проблемы с сердцем?' checked={heartDesease} onPress={(e) => { setHeartDeasease(!heartDesease) }} />
			<CheckBox title='У вас есть гипертония?' checked={hypertension} onPress={(e) => { setHypertension(!hypertension) }} />
			<CheckBox title='У вас есть диабет?' checked={diabetes} onPress={(e) => { setDiabetes(!diabetes) }} />
			<CheckBox title='У вас есть проблемы с сосудами?' checked={vascularDesease} onPress={(e) => { setVascularDesease(!vascularDesease) }} />
			<CheckBox title='Болел ли кто-то из родтсвеников инсультом?' checked={heridity} onPress={(e) => { setHeridity(!heridity) }} />
			<CheckBox title='Вы курите?' checked={smoking} onPress={(e) => { setSmoking(!smoking) }} />
			<CheckBox title='Вы выпиваете?' checked={drinking} onPress={(e) => { setDrinking(!drinking) }} />
			<Text style={{
				color: "#fff",
				marginLeft: "2%"
			}}>
				Как часто вы занимаетесь спортом</Text>
			<ButtonGroup
				buttons={[{ element: () => { return (<Text>Редко</Text>) } }, { element: () => { return (<Text>Раз в неделю</Text>) } }, { element: () => { return (<Text>3 и больше</Text>) } }]}
				selectedIndex={sports}
				onPress={(selectedIndex) => setSports(selectedIndex)}
			/>
			<Text style={{
				color: "#fff",
				marginLeft: "2%"
			}}>
				Оцените ваш уровень стресса в повседневной жизни</Text>
			<ButtonGroup
				buttons={[{ element: () => { return (<Text>Низкий</Text>) } }, { element: () => { return (<Text>Средний</Text>) } }, { element: () => { return (<Text>Высокий</Text>) } }]}
				selectedIndex={stress}
				onPress={(selectedIndex) => setStress(selectedIndex)}
			/>
			<Button
				title="Отправить"
				onPress={submit}
			/>
		</ScrollView>
	)
}