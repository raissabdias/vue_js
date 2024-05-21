<?php
    require_once('MailerConfig.php');

    $post = $_POST;

    # Sanitize inputs
    $name = strip_tags($post['name']);
    $email = filter_var($post['email'], FILTER_SANITIZE_EMAIL);
    $subject = strip_tags($post['subject']);
    $message = strip_tags($post['message']);

    # Validate name
    if (strlen($name) < 6) {
        echo 'Name is invalid';
        die;
    }
    
    # Validate email
    if (!preg_match('/@.+\./', $email)) {
        echo 'Email is invalid';
        die;
    }
    
    # Validate subject
    if (strlen($subject) < 1) {
        echo 'Subject is invalid';
        die;
    }
    
    # Validate message
    if (strlen($message) < 1) {
        echo 'Message is invalid';
        die;
    }

    # Send email
    $send = send($name, $email, $subject, $message);
    if ($send) {
        echo 'sent';
    }