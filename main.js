class classRoom{
    //makenumclassroom variable
    constructor(classN){
        this.className = classN;
    }
    getClassName(){
        return this.className;
    }
    setClassName(n){
        this.className = n;
    }
}

class Unit extends classRoom{
    constructor(unitN){
        super(classN);
        this.unitName = unitN;
    }
    getUnitName(){
        return this.unitName;
    }
    setUnitName(n){
        this.unitName = n;
    }
}

class Student extends Unit{
    //make picture variable
    constructor(studentN){
        super(classN, unitN)
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
