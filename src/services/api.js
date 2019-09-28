function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export async function getClock() {
    return {
        time: "21:30",
        dailyPlus: 2,
        dailyMinus: -1,
    }
}

export async function getActions() {
    return [
        {
            id: 1,
            name: 'Test',
            description: 'Test',
            frequency: 11,
            effect: +1
        },
        {
            id: 2,
            name: 'Test',
            description: 'Test',
            frequency: 11,
            effect: -1
        }
    ]
}

export async function getFact() {
    return {
        id: 1,
        text: 'Test'
    }
}


export async function getLogs() {
    await sleep(1000);
    return [
        {
            id: 1,
            actionTime: '01-02-2019 13:12',
            before: "23:33",
            after: "23:30",
            action: {
                id: 1,
                name: 'Test',
                effect: -3,
                description: 'Teste',
                frequency: 11
            }
        }
    ];
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