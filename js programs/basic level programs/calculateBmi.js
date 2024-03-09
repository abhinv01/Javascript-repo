//calculate BMI based on height and weight and return health classification

function calculateBMI(weight, height) {
    let bmi;
    if(weight>0 && height>0){
        bmi = weight / (height * height);
    }
    

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}


console.log(calculateTip(50.00,0.20))

console.log(calculateBMI(45, 1.60))