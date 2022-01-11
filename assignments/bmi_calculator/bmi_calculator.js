// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if(typeof mass==="number" && typeof height==="number" && height>0 && mass>0){
        return mass/(height*height)
    }
    
}

module.exports = BMICalculator;