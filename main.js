//array for classRoom
const classRoom = [];

class Unit{
    constructor(unitN, classRoomNumber){
        this.unitName = unitN;
        this.connectedClassRoomNum = classRoomNumber; 
    }
    getUnitName(){
        return this.unitName;
    }
    setUnitName(n){
        this.unitName = n;
    }
}

class Student{
    constructor(studentN){
        this.studentName = studentN;
    }
    getStudentName(){
        return this.studentName;
    }
    setStudentName(n){
        this.studentName = n;
    }
    toString(){
        return(studentName + "gahh");
    }
}

class checkBox{
    constructor(){
        this.checked = false;
    }
    clicked(){
        this.checked = true;
    }
    getChecked(){
        return this.checked;
    }
}

function fn1 () {
    alert("BSDHfhdfhsdfsdf");
}

console.log(new Unit("iouuioiooiu", "joe"));