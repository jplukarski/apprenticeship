const today = new Date()
let programmers = process.argv.slice(2).sort( () => .5 - Math.random() )
let nextMonday
let nextMondayCopy
let pairs = []
let mondays = []
const numberOfProgrammers = programmers.length
let pairsPerWeek
let numberOfWeeks
let even

const scheduler = () => {
    getWeeks()
    getPairsPerWeek()
    getMondays()
    makeSchedule()
}

const getWeeks = () => {
    if(numberOfProgrammers % 2 === 0){
        numberOfWeeks = numberOfProgrammers - 1
    } else {
        numberOfWeeks = numberOfProgrammers
    }
}

const getPairsPerWeek = () => {
    if(numberOfProgrammers % 2 === 0){
        pairsPerWeek = numberOfProgrammers / 2
        even = true
    } else {
        pairsPerWeek = Math.round(numberOfProgrammers / 2)
        even = false
    }
}

const getMondays = () => {
    if(today.getDay() === 0) {
        nextMonday = today.setDate(today.getDate() + 1)
        nextMondayCopy = today.setDate(today.getDate() + 1)
        mondays.push(nextMonday)
        getRemainingMondays()
    } else {
        nextMonday = new Date(today.setDate(today.getDate() + (1 + 7 - today.getDay()) % 7))
        nextMondayCopy = new Date(today.setDate(today.getDate() + (1 + 7 - today.getDay()) % 7))
        mondays.push(nextMonday)
        getRemainingMondays()
    }
}

const getRemainingMondays = () => {
    for(let i = 1; i < numberOfWeeks; i++){
        mondays.push(new Date(nextMondayCopy.setDate(nextMondayCopy.getDate() + 7)))
    }
}

const makeSchedule = () => {
    if (even){
        makeEvenSchedule()
    } else {
        makeOddSchedule()
    }
    printSchedule()
}

const makeOddSchedule = () => {
    for(let i = 0; i < programmers.length; i++){
        let currentWeeksPairs = []
        for(let x = 1; x <= pairsPerWeek; x++) {
            if(x !== pairsPerWeek){
                currentWeeksPairs.push([programmers[x - 1], programmers.slice(-x)[0]])
            } else {
                currentWeeksPairs.push([programmers[x - 1]])
            }
        }
        pairs.push(currentWeeksPairs)
        programmers.unshift(programmers.pop())
    }
}

const makeEvenSchedule = () => {
    const firstProgrammer = programmers[0]
    let remainingProgrammers = programmers.slice(1)
    for(let i = 0; i < remainingProgrammers.length; i++){
        let currentWeeksPairs = []
        for(let x = 1; x <= pairsPerWeek; x++) {
            if(x !== pairsPerWeek){
                currentWeeksPairs.push([remainingProgrammers[x - 1], remainingProgrammers.slice(-x)[0]])
            } else {
                currentWeeksPairs.push([firstProgrammer, remainingProgrammers[x - 1]])
            }
        }
        pairs.push(currentWeeksPairs)
        remainingProgrammers.unshift(remainingProgrammers.pop())
    }
}

const printSchedule = () => {
    console.log("---------------------")
    mondays.map((monday, i) => {
        console.log(monday.toDateString())
        console.log("---------------")
        pairs[i].map(pair => {
            if(pair.length > 1){
                console.log(pair[0] + " & " + pair[1])
            } else {
                console.log(pair[0])
            }
        })
        console.log("---------------------")
    })
}

scheduler()