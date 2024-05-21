<?php

require_once('../vendor/autoload.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

/**
 * Send an email
 * @param string $name 
 * @param string $email 
 * @param string $subject 
 * @param string $message 
 * @return boolean|string
 */
function send(string $name, string $email, string $subject, string $message) 
{
    $mail = new PHPMailer(true);

    try {
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'mailervue@gmail.com';
        $mail->Password = 'VueMailer.js';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 485;

        //Recipients
        $mail->setFrom('mailervue@gmail.com', 'Vue Mailer.js');
        $mail->addAddress($email, $name);

        //Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $message;

        $mail->send();
        return true;
    } catch (Exception $e) {
        return $mail->ErrorInfo;
    }
}