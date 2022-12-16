<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "info@chriscosa.co.za";
    $headers = "From: ".$mailFrom;
    $txt = "New message on website chriscosa.co.za from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}