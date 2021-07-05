var user = 'testprep';

switch (user) {
    case 'admin':
        console.log('All access.');
        break;

    case 'subadmin':
        console.log('Access to create/delete courses.');
        break;

    case 'testprep':
        console.log('Access to create/delete test.');
        break;

    case 'user':
        console.log('Access to consume content and create/delete comment.');
        break;

    default:
        console.log('not a valid role.');
        break;
}