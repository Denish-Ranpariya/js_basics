class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    //use # to make it private
    #courseList = [];

    getInfo() {
        return { name: this.name, email: this.email };
    }

    enrollInCourse(courseName) {
        this.#courseList.push(courseName);
    }

    getCourses() {
        return this.#courseList;
    }

    login() {
        return "You are logged in.";
    }
}

//inhertance 
class SubAdmin extends User{
    constructor(name, email){
        super(name, email);
    }
    getSubAdminInfo(){
        return "I am a subadmin";
    }

    login(){
        return "subadmin has logged in";
    }
}


//to export this class to module
module.exports = User;


var hitesh = new User("hitesh", "hitesh@abc.xyz");

hitesh.enrollInCourse("React bootcamp");
hitesh.enrollInCourse("MERN stack");
hitesh.enrollInCourse("Bootstrap courses");

console.log(hitesh.getCourses());


var tom = new SubAdmin("tom", "tom@abc.com");
console.log(tom.getSubAdminInfo());
console.log(tom.getInfo());
console.log(tom.login());