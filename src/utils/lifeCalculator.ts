// const DOB : Date = new Date(prompt("Enter your Date of Birth : MM/DD/YY")!)
export function lifeCalculator(dob : Date , lifespan : number){

    const crrDate : Date = new Date();
    let years = (crrDate.getFullYear() - dob.getFullYear());
    if (crrDate.getMonth() < dob.getMonth() || 
    crrDate.getMonth() == dob.getMonth() && crrDate.getDate() < dob.getDate()) {
        years--;
    }
    const age : number = years;

    const milisecond = crrDate.getTime() - dob.getTime()

    const endDate = new Date(dob.getFullYear()+lifespan,dob.getMonth(),dob.getDate())

    const remainingMilisecond = endDate.getTime() - crrDate.getTime()

    console.log("checking render - lifeCalculator")

    const countDown = msToTime(remainingMilisecond)
    return {
        age,
        countDown,
        lived: {
            weeks : Math.floor(convertToWeek(milisecond)) ,
            days : Math.floor(convertToDays(milisecond)),
            hours : Math.floor(convertToHours(milisecond)),
            minutes : Math.floor(convertToMinutes(milisecond)),
            seconds : Math.floor(convertToSeconds(milisecond))
        },
        remaining: {
            weeks : Math.floor(convertToWeek(remainingMilisecond)) ,
            days : Math.floor(convertToDays(remainingMilisecond)),
            hours : Math.floor(convertToHours(remainingMilisecond)),
            minutes : Math.floor(convertToMinutes(remainingMilisecond)),
            seconds : Math.floor(convertToSeconds(remainingMilisecond))
        }
    }
}


function convertToWeek(ms:number){
    return ms/(1000*60*60*24*7)
}
function convertToDays(ms : number){
    return ms/(1000*60*60*24)
}
function convertToHours(ms : number){
    return ms/(1000*60*60)
}
function convertToMinutes(ms : number){
    return ms/(1000*60)
}
function convertToSeconds(ms : number){
    return ms/(1000)
}

export function msToTime(ms:number){
    
    const week =Math.floor(ms/(1000*60*60*24*7))
    let rem = ms%(1000*60*60*24*7)
    const days = Math.floor(rem/(1000*60*60*24))
    rem = rem%(1000*60*60*24)
    const hours = Math.floor(rem/(1000*60*60))
    rem = rem%(1000*60*60)
    const min = Math.floor(rem/(1000*60))
    rem = rem%(1000*60)
    const sec = Math.floor(rem/1000)

    return {
        weeks : week,
        days : days,
        hours : hours,
        minutes : min,
        seconds : sec
    }
}