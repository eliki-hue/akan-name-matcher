malenames =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
femalenames =["Akosu", "Adwoa", "Abenaa", "Akuu", "Yaa", "Afua", "Ama"]




function dayCalculator (){
    var =
    Day_of_the_week = (((19/4) -2*19-1) + ((5*parseInt(year)/4) ) + ((26*(parseInt(month)+1)/10)) + parseInt(date)) % 7
    return Day_of_the_week
}
var answer = dayCalculator
console.log(answer)