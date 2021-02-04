'use strict';

const { getUserByName } = require("../controllers/User");

 var examples = [{ 
  "id" : 101,
  "username" : "juan",
  "firstName" : "Juan",
  "lastName" : "Luis",
  "email" : "hola@gmail.com",
  "password" : "1234",
  "phone" : "666111000",
  "address" : "avd europa",
  "pc" : 29001,
  "city" : "malaga",
  "country" : "spain",    
  "userStatus" : 5,  
}, {
  "id" : 102,
  "username" : "pablo",
  "firstName" : "Pablo",
  "lastName" : "Ariño",
  "email" : "pablo@gmail.com",
  "password" : "1234",
  "phone" : "666111222",
  "address" : "el palo",
  "pc" : 29002,
  "city" : "malaga",
  "country" : "spain",    
  "userStatus" : 5,  
}, {
  "id" : 103,
  "username" : "alberto",
  "firstName" : "Alberto",
  "lastName" : "Lopez",
  "email" : "alberto@gmail.com",
  "password" : "1234",
  "phone" : "666111333",
  "address" : "avd centro",
  "pc" : 29003,
  "city" : "malaga",
  "country" : "spain",    
  "userStatus" : 5,  
}, {
  "id" : 104,
  "username" : "javi",
  "firstName" : "Javier",
  "lastName" : "Luque",
  "email" : "javier@gmail.com",
  "password" : "1234",
  "phone" : "666111444",
  "address" : "alhaurin",
  "pc" : 29004,
  "city" : "malaga",
  "country" : "spain",    
  "userStatus" : 5,  
}, {
  "id" : 105,
  "username" : "antonio",
  "firstName" : "Juan Antonio",
  "lastName" : "Godrid",
  "email" : "jantonio@gmail.com",
  "password" : "1234",
  "phone" : "666111555",
  "address" : "cesur",
  "pc" : 29005,
  "city" : "malaga",
  "country" : "spain",    
  "userStatus" : 5,  
}
];


/**
 * Create user
 * This can only be done by the logged in user.
 *
 * body User Created user object
 * no response value expected for this operation
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {

    try{
      var valid_id = !body.id.isEmpty;
      var valid_user = !body.username.isEmpty;
      var valid_first = !body.firstName.isEmpty;
      var valid_last = !body.lastName.isEmpty;
      var valid_email = !body.email.isEmpty;
      var valid_pass = !body.password.isEmpty;
      var valid_phone = !body.phone.isEmpty;
      var valid_address = !body.address.isEmpty;
      var valid_pc = !body.pc.isEmpty;
      var valid_city = !body.city.isEmpty;
      var valid_country = !body.country.isEmpty;
      var valid_status = !body.userStatus.isEmpty;
    }catch(err){
      return reject({"message": "Error, faltan datos"});
    }

    if (valid_id && valid_user && valid_first && valid_last && valid_email && valid_pass && valid_phone && valid_address && valid_pc && valid_city && valid_country && valid_status) {
      let encontrado=false;
      for (let i=0; i<examples.length && encontrado==false; i++) {
        if (examples[i].username == body.username) {
          encontrado=true;          
        }
      }
      
      if (encontrado==false) {
        examples.push(body);    
        resolve([ {"message": "Usuario creado" }, {status:201} ]);
      } else {
        resolve([ {"message": "Usuario ya existe" }, {status:400} ]);
      }
    }    
  });
}


/**
 * Delete user
 * This can only be done by the logged in user.
 *
 * username String The name that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteUser = function(username) {
  return new Promise(function(resolve, reject) {
    
    let encontrado=false;
    let ele;
    for(let i=0; i<examples.length && !encontrado; i++) {
      if (examples[i].username==username){
        encontrado=true;
        ele = examples[i];
      }
    }
    
    if (encontrado==true) {
      let pos = examples.indexOf(ele);      
      examples.splice(pos, 1);
      resolve([ {"message": "Usuario eliminado"}, {status:200} ]);
    } else {
      resolve([ {"message": "Usuario no encontrado"}, {status:404} ]);
    }
    
  });
}


/**
 * Get user by user name
 * 
 *
 * username String The name that needs to be fetched. Use user1 for testing. 
 * returns User
 **/
exports.getUserByName = function(username) {
  return new Promise(function(resolve, reject) {

    let encontrado=false;
    for (let i=0; i<examples.length && encontrado==false; i++) {
      if (examples[i].username == username) {
        encontrado=true;
        resolve([ examples[Object.keys(examples)[i]], {status:200} ]);        
      }
    }
    //console.log("hola");
    if (encontrado==false) {
      //resolve(examples[Object.keys(examples)[0]]);
      //resolve(examples[0]);
      //resolve({});
      resolve([{"message": "Usuario no encontrado"}, {status:404}]);
    }

/*
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
*/
  });
}


/**
 * Updated user
 * This can only be done by the logged in user.
 *
 * username String name that need to be updated
 * body User Updated user object
 * no response value expected for this operation
 **/
exports.updateUser = function(username,body) {
  return new Promise(function(resolve, reject) {
    
    let encontrado=false;
    let i;
    for (i=0; i<examples.length && encontrado==false; i++) {
      if (examples[i].username == username) {
        encontrado=true;          
      }
    }
    
    i--;
    if (encontrado) {
      examples[i] = body;    
      resolve([ {"message": "Usuario actualizado" }, {status:200} ]);
    } else {
      resolve([ {"message": "No se puede actualizar, el usuario no existe"}, {status:404} ]);
    }

  });
}


exports.users = examples;
