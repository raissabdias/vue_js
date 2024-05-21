<?php
    require_once('MailerConfig.php');

    $post = $_POST;
    $name = $post['name'];
    $email = $post['email'];
    $subject = $post['subject'];
    $message = $post['message'];

    $send = send($name, $email, $subject, $message);
    if ($send) {
        echo 'sent';
    }