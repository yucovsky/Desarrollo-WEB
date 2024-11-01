document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const consulta = document.getElementById('consulta').value;

    // Enviar correo al dueño de la página
    Email.send({
        Host: "smtp.gmail.com",
        Username: "yaquintoleon@gmail.com", // Tu correo
        Password: "tu-contraseña-o-contraseña-de-aplicación", // Usa la contraseña de aplicación si es necesario
        To: 'ignacio.giovannetti@gmail.com', // Correo del destinatario (tú)
        From: email, // De quién proviene el correo
        Subject: `Nuevo mensaje de ${nombre} ${apellido}`,
        Body: `Nombre: ${nombre}<br>Apellido: ${apellido}<br>Email: ${email}<br>Consulta: ${consulta}`
    }).then(
        // Una vez enviado el correo, enviar confirmación al usuario
        () => {
            return Email.send({
                Host: "smtp.gmail.com",
                Username: "yaquintoleon@gmail.com", // Tu correo
                Password: "tu-contraseña-o-contraseña-de-aplicación", // Usa la contraseña de aplicación si es necesario
                To: email, // Correo del usuario
                From: "yaquintoleon@gmail.com", // Tu correo como remitente
                Subject: "Confirmación de registro",
                Body: `Hola ${nombre},<br><br>Gracias por contactarnos. Hemos registrado tu consulta:<br>${consulta}<br><br>Te responderemos a la brevedad.<br><br>Saludos,<br>El equipo.`
            });
        }
    ).then(() => {
        alert("Correo enviado exitosamente!");
    }).catch(error => {
        alert("Error al enviar el correo: " + error);
    });
});
