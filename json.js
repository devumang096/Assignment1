const student_details=[
    {
        name:"umang",
        id:3,
        course:"btech"
    }
    
]
var student_data;
for(let i=0;i<student_details.length;i++){
     student_data = student_details[i].course;
}
console.log(student_data);