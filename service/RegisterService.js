'use strict';

var {users} = require ('./UserService');

var examples = [{
  "inOut" : true,
  "regDate" : "2010-01-23T04:56:07.000+00:00",
  "idUsu" : 101,
  "id" : 100
}, {
  "inOut" : false,
  "regDate" : "2021-02-03T09:36:07.000+00:00",
  "idUsu" : 102,
  "id" : 101
}, {
  "inOut" : false,
  "regDate" : "2019-02-03T09:36:07.000+00:00",
  "idUsu" : 103,
  "id" : 102
}, {
  "inOut" : false,
  "regDate" : "2018-02-03T09:36:07.000+00:00",
  "idUsu" : 104,
  "id" : 103
}, {
  "inOut" : false,
  "regDate" : "2017-02-03T09:36:07.000+00:00",
  "idUsu" : 105,
  "id" : 104
}
];


/**
 * Create register
 *
 * body Register Created register object
 * no response value expected for this operation
 **/
exports.createRegister = function(body) {
  return new Promise(function(resolve, reject) {
    
    let encontrado=false;
    for (let i=0; i<examples.length && encontrado==false; i++) {
      if (examples[i].id == body.id) {               
        encontrado=true;          
      }
    }

    let hayUsu= false;
    if (!encontrado) {
      for (let j=0; j<users.length; j++) {
        if (users[j].id === body.idUsu) {
          hayUsu=true;
        } 
      }
    }
    
    if (encontrado==false) {
      if (hayUsu) {
        examples.push(body);    
        resolve([ {"message": "Registro creado" }, {status:201} ]);
      } else {
        resolve([ {"message": "Error, Usuario no existe" }, {status:404} ]);  
      }      
    } else {
      resolve([ {"message": "Error, Registro ya existe" }, {status:400} ]);
    }


    //version donde el usuario no necesita estar dado de alta con anterioridad
/*
    let encontrado=false;
    for (let i=0; i<examples.length && encontrado==false; i++) {
      if (examples[i].id == body.id) {               
        encontrado=true;          
      }
    }
    
    if (encontrado==false) {
      examples.push(body);    
      resolve([ {"message": "Registro creado" }, {status:201} ]);      
    } else {
      resolve([ {"message": "Error, Registro ya existe" }, {status:400} ]);
    }
*/
  });
}


/**
 * Get register by id
 * 
 *
 * id Integer The name that needs to be fetched. Use 101 for testing. 
 * returns Register
 **/
exports.getRegisterById = function(id) {
  return new Promise(function(resolve, reject) {
    
    let encontrado=false;
    for (let i=0; i<examples.length && encontrado==false; i++) {
      if (examples[i].id == id) {
        encontrado=true;
        resolve([ examples[Object.keys(examples)[i]], {status:200} ]);        
      }
    }
    
    if (encontrado==false) {      
      resolve([{"message": "Registro no encontrado"}, {status:404}]);
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

