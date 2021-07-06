//function getRole(name, role){} is also fine
var getRole = function (name, role){
    switch (role) {
        case 'admin':
            return `${name} is admin and has all access`
            break; //unreachable
        
        case 'subadmin':
            return `${name} is subadmin and has access to create/delete courses`
            break;
        
        case 'testprep':
            return `${name} is testprep and has access to create/delete tests`
            break;
        
        case 'user':
            return `${name} is user and has access to consume all the content`
            break;

        default:
            return `${name} is a trial user`
            break;
    }
}

console.log(getRole('denish', 'admin'));
console.log(getRole('jaimin', 'subadmin'));
console.log(getRole('manoj', 'testprep'));
console.log(getRole('nishit', 'user'));
console.log(getRole('abc', 'visitor'));
