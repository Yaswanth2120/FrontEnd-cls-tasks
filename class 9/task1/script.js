function update(){
    let score = parseFloat(document.getElementById("input").value);
    let gradeSpan = document.getElementById("grade_span");
    let grade = ""
    let color = ""
    
    if(score >= 80){
        grade = "A";
        color = "green";
    }else if(score >=60 && score <=79){
        grade = "B";
        color = "blue";
    }else if(score>=40 && score <=59){
        grade = "C";
        color = "orange";
    }else if(score >=0 && score <=39){
        grade = "F";
        color = "red";
    }

    gradeSpan.innerHTML = grade;
    gradeSpan.style.color = color;
}
