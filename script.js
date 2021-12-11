malenames =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
femalenames =["Akosu", "Adwoa", "Abenaa", "Akuu", "Yaa", "Afua", "Ama"]




function dayCalculator (){
    Day_of_the_week = ( ( (19/4) -2*19-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7
    return Day_of_the_week
}
alert (Day_of_the_week)