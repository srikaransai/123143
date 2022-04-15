var name_students=[];
function submit(){
    var name1= document.getElementById("Student1").value;
    var name2= document.getElementById("Student2").value;
    var name3= document.getElementById("Student3").value;
    var name4= document.getElementById("Student4").value;

    name_students.push(name1);
    name_students.push(name2);
    name_students.push(name3);
    name_students.push(name4);

    document.getElementById("display_name").innerHTML=name_students;
    console.log(name_students);

    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
    
    
}

function sorting(){
    name_students.sort();
    document.getElementById("display_name").innerHTML=name_students;

}
