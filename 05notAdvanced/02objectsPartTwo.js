var User = {
    name: '',
    getUserName : function(){
        console.log(`Username is ${this.name}`);
    }
};

//another method of creating the object 
var denish = Object.create(User, {
    name : {value: 'Denish'},
    courseCount : {value: 4},
});

denish.getUserName();

