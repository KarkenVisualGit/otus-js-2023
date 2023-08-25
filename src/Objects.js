 let user = {
        name: 'John'
    };
function  mutateObject(obj) {  
    let input = prompt('Enter user age');
    obj['age'] = +input;

    let newObj = new Object();
    
    Object.assign(newObj, obj,{role:'admin'});
    let {name, age, role} = newObj;
    
    // console.log(user);
    // console.log(admin['name'] + " " + admin['age'] + " " + admin['role']);
    // console.log(name + " " + age + " " + role);

    return newObj;
}


module.exports = mutateObject