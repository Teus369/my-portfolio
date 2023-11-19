<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);
    $subject = addslashes($_POST['subject']);
    $message = addslashes($_POST['message']);

    $para = "mateusizaias369@gmailcom";
    $assunto = "portifolio - git";

    $corpo = "Nome: ".$nome."\n"."Email: ".$email."\n"."Telefone: ".$telefone."\n"."Assunto: ".$subject."\n"."Menssagem: ".$message;

    $cabeca = "From: email que envia"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("mateusizaias147@gmailcom");
    }echo{
        echo("erro ao enviar");
    }

?>