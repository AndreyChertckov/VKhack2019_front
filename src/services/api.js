import { AsyncStorage } from 'react-native';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getToken() {
    let token = await AsyncStorage.getItem('token');
    if (token != null) {
        return token;
    }
    return -1;
}

export async function getClock(state) {
    try {
        const token = await getToken();
        let response = await fetch(
            'http://95.213.38.134:8080/api/user/clock?token=' + token
        );
        if (response.status == 200) {
            let responseJson = await response.json();
            return {
                time: responseJson['time'],
                dailyMinus: responseJson['daily_minus'],
                dailyPlus: responseJson['daily_plus']
            };
        }
    } catch (error) {
        console.error(error);
    }
}

export async function getActions() {
    try {
        const token = await getToken();
        let response = await fetch(
            'http://95.213.38.134:8080/api/action?token=' + token
        );
        if (response.status == 200) {
            let responseJson = await response.json();
            return responseJson.map((el) => {
                return {
                    name: el['name'],
                    effect: el['time_effect']
                }
            });
        }
    } catch (error) {
        console.error(error);
    }
}

export async function getFact() {
    try {
        let response = await fetch(
            'http://95.213.38.134:8080/api/fact'
        );
        if (response.status == 200) {
            let responseJson = await response.json();
            return responseJson;
        }
    } catch (error) {
        console.error(error);
    }
}


export async function getLogs() {
    try {
        const token = await getToken();
        let response = await fetch(
            'http://95.213.38.134:8080/api/user/logs?token=' + token
        );
        if (response.status == 200) {
            let responseJson = await response.json();
            return responseJson;
        }
    } catch (error) {
        console.error(error);
    }
}

export async function getChart(type) {
    await sleep(100);
    switch (type) {
        case 'weekly':
            return {
                timebounds: ['123', '125'],
                overall: [
                    {
                        day: '123',
                        dailyPlus: '123',
                        dailyMinus: '-123',
                    },
                    {
                        day: '123',
                        dailyPlus: '123',
                        dailyMinus: '-123',
                    },
                    {
                        day: '123',
                        dailyPlus: '123',
                        dailyMinus: '-123',
                    },
                    {
                        day: '123',
                        dailyPlus: '123',
                        dailyMinus: '-123',
                    },
                    {
                        day: '123',
                        dailyPlus: '123',
                        dailyMinus: '-123',
                    },
                    {
                        day: '123',
                        dailyPlus: '123',
                        dailyMinus: '-123',
                    },
                ]
            }
        case 'monthly':
            return {
                timebounds: ['123', '125'],
                overall: [
                    {
                        day: '123',
                        dailyPlus: '123',
                        dailyMinus: '-123',
                    },
                    {
                        day: '123',
                        dailyPlus: '123',
                        dailyMinus: '-123',
                    },
                    {
                        day: '123',
                        dailyPlus: '123',
                        dailyMinus: '-123',
                    },
                    {
                        day: '123',
                        dailyPlus: '123',
                        dailyMinus: '-123',
                    },
                    {
                        day: '123',
                        dailyPlus: '123',
                        dailyMinus: '-123',
                    },
                    {
                        day: '123',
                        dailyPlus: '123',
                        dailyMinus: '-123',
                    },
                ]
            }
    }
}