function objects() {
    let user = {
        name: 'John'
    };
    
    let input = prompt('Enter user age');
    user['age'] = +input;

    let admin = new Object();
    
    Object.assign(admin, user,{role:'admin'});
    let {name, age, role} = admin;
    
    // console.log(user);
    // console.log(admin['name'] + " " + admin['age'] + " " + admin['role']);
    // console.log(name + " " + age + " " + role);

    return admin;
}



module.exports = objects