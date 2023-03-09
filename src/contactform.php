<?php

if(isset($_POST['submit'])) {
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$subject = "Five Star Backflow Website";
	$message = $_POST['message'];
	
	$mailTo = "";
	$headers = "From: Website viewer with the email " .$email;
	
	mail($mailTo, $subject, $message, $headers);
}

?>