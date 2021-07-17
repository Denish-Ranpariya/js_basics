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
}

//to export this class to module
module.exports = User;


var hitesh = new User("hitesh", "hitesh@abc.xyz");

hitesh.enrollInCourse("React bootcamp");
hitesh.enrollInCourse("MERN stack");
hitesh.enrollInCourse("Bootstrap courses");

console.log(hitesh.getCourses());
