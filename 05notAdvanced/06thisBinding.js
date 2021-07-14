var denish = {
    firstName : 'denish', 
    lastName : 'ranpariya',
    courseCount : 4,
    role : 'user',
    getInfo : function(){
        console.log(`
            First name : ${this.firstName}
            Last name : ${this.lastName}
            He is studying ${this.courseCount} number of courses
            He is a ${this.role}
        `);
    }
}

//we want to getInfo() method in new object 
//like hitesh.getInfo()

var hitesh = {
    firstName : 'hitesh', 
    lastName : 'choudhary',
    role : 'admin',
    courseCount : 5
}

// denish.getInfo();

//bind method will assigns refence to hitesh
//bind method returns reference
var hiteshInfo = denish.getInfo.bind(hitesh);
hiteshInfo();

