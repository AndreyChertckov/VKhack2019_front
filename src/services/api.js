

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