<?php

if($_POST["name"]) {

mail("noahgidon@gmail.com", "Question from: ".$_POST["name"],

"Email: ".$_POST["cemail"]."\nQuestion\n". $_POST["subject"]);

}

?>

