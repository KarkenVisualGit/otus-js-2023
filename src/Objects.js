//  let user = {
//         name: "John"
//     };
function mutateObject(obj) {
  let input = prompt("Enter user age");
  obj["age"] = +input;

  const admin = Object.assign({}, obj, { role: "admin" });
  let { name, age, role } = admin;

  // console.log(user);
  // console.log(admin['name'] + " " + admin['age'] + " " + admin['role']);
  console.log(name + " " + age + " " + role);

  return admin;
}

module.exports = mutateObject;
