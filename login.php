<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="header">
        <img src="C:\xampp\htdocs\college_sports\college image.jpg" alt="image">
        <h1>SAAGI RAMA KRISHNAM RAJU ENGINEERING COLLEGE</h1>
        <h3>SPORTS WEBSITE</h3>
        <h2>CHINAMMIVARAM BHIMAVARAM 534204</h2>
        
    </div> 
    <div class="main">
        <img src="C:\xampp\htdocs\college_sports\collegeenterance.jpg" alt="" style="height:600px;width:100%">
        <div class="login">
            <H1>STUDENT LOGIN</H1>
            <form action="app.php" method="POST">
<input type="text" placeholder="REGISTER NUMBER" name="reg">
<br>
<input type="password" placeholder="        PASSWORD" name="password">
<button type="submit">LOGIN</button>
<h1>
<?php
    if(isset($_GET['error'])){
        echo $_GET['error'];
    }
    ?>
</h1>
            </form>
        </div>
    </div>
</body>
</html>