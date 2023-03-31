// hw

function gradeCalculator(marks){

    if(marks >= 80){
        return 'O+';
    }
    else if(marks >= 60){
        return 'A+';
    }
    else if(marks >= 40){
        return 'B+';
    }
    else if(marks >= 20){
        return 'C+';
    }
    else{
        return 'Fail'
    }
}

// gradeCalculator(45);
// console.log(gradeCalculator(45)) ;
// console.log(gradeCalculator(1000)) ;
// console.log(gradeCalculator('samarth')) ;