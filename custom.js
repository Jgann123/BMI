function bmi(){
   //Get feet and inches value
    let feet = document.querySelector(".feet").Value;
    let inch = document.querySelector(".inch").Value;
    //merge feet and inches value in oned
    let metre = feet + "." + inch;
    //feet to metre conversion and get a height in meters
    let height = metre / 3.2808;
    //get weight value
    let weight = document.querySelector(".weight").Value;
    //BMI calculation
    let bmi = weight / Math.pow(height, 2);
    //BMI showing in p tag with condition
    if(bmi<18.5){
        document.querySelector("p").innerHTML = "Your Body Mass Index (BMI) is-: "+(Math.round(bmi*100)/100).toFixed(2)+"<br>"+"Index Value is Under Weight";

    }

    else if(bmi >= 25 && bmi <= 29.9) {
        document.querySelector("p").innerHTML = "Your Body Mass Index (BMI) is-: "+(Math.round(bmi*100)/100).toFixed(2)+"<br>"+"Index Value is Over Weight";
        
    }
    else if(bmi > 30) {
        document.querySelector("p").innerHTML = "Your Body Mass Index (BMI) is-: "+(Math.round(bmi*100)/100).toFixed(2)+"<br>"+"Index Value is in Obesity";

    }

}

//Click Event Fire On calculator Button

document.querySelector(".btn").addEventListener("click", bmi);