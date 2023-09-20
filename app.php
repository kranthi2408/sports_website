<?php
$servername="localhost";
$username="root";
$password="password";
$databse="test";
$conn=new mysqli($servername,$username,$password,$databse);
if($conn->connect_error){
    die("connection failed: ".$conn->connect_error);
} 

if(isset($_POST['username']) || isset($_POST['password'])){
    $reg=strtoupper( $_POST['username']);
    
    $password=strtoupper( $_POST['password']);
   
    $result=$conn->query("select count(*) from pratice where reg='$reg' ");
    $row=$result->fetch_row();
    if($row[0]=='1'){
        $result=$conn->query("select password from pratice where reg='$reg'");
        $row=$result->fetch_row();
        if($password==$row[0]){
            header("location:home.php");
        }
        else{
           
            header("location:login.php?error=wrong password");
            exit();
        }
    }
    else{
        
        header("location:login.php?error=invalid user");
    }
}


?>