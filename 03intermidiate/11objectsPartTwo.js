var user = {
    firstName: 'Denish',
    lastName: 'Ranpariya',
    role: 'user',
    loginCount: '33',
    signedInWithGoogle: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function () {
        return `${this.firstName} has enrolled in total ${this.courseList.length} number of courses.`;
    },
    getUserInfo : function (){
        return `
            First Name: ${this.firstName}
            Last Name: ${this.lastName}
            Role: ${this.role},
            Login Count: ${this.loginCount}
            Is user signed in with google: ${this.signedInWithGoogle}
            Courses enrolled: ${this.courseList}
            Number of courses: ${this.getCourseCount()}
        `;
    },
};

console.log(user.firstName);
user.buyCourse('JavaScript');
user.buyCourse('mongoDB');
user.buyCourse('MERN');
console.log(user);
console.log(user.getCourseCount());
console.log(user.getUserInfo());