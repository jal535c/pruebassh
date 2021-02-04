<!DOCTYPE html>
<html>
<head>
  <title>Connet</title>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
  
  <div class="container">    
    <h3 class="mt-3">Connet</h3>

    <form action="login.php" method="post">     
      <div class="form-group">
        <label for="usr">Nombre de usuario (email):</label>
        <input type="email" class="form-control w-25" id="usr" name="usr" autocomplete="off" value="email@connet.com">
      </div>      
      
      <div class="form-group">
        <label for="pass">Contraseña:</label>
        <input type="password" class="form-control w-25" id="pass" name="pass" value="123">
      </div>      
      
      <button class="btn btn-primary w-25">Entrar</button>
    </form>  

    <a href="registro.php">Registrate</a>    
  </div>

</body>
</html>