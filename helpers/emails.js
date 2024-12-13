import nodemailer from 'nodemailer'

const emailRegistro = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const { email, nombre, token } = datos

  //Enviar el email
  await transport.sendMail({
    from: 'bienesraices-230369.com',
    to: email,
    subject: '¡Bienvenido/a a BienesRaices_230369!',
    text: 'Ya casi puedes usar nuestra plataforma, solo falta...',
    html: `
      <div style="font-family: Arial, sans-serif; background: #f3f4f6; padding: 20px; margin: 0;">
        
        <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); overflow: hidden;">
          
          
          <div style="background: linear-gradient(to right, #55738D, #CBC8C4); padding: 20px; text-align: center;">
            <h1 style="margin: 0; color: white; font-size: 24px;">¡Bienvenido/a a <span style="color: linear-gradient(to right, #96A7B6, #FFFFFF);">BienesRaices_230369!</span></h1>
          </div>
          
          
          <div style="padding: 20px; text-align: center; color: #333;">
            <p style="font-size: 18px; margin: 10px 0;">Hola <span style="color: #000000; font-weight: bold;">${name}</span>,</p>
            <p style="font-size: 16px; margin: 10px 0;">Gracias por unirte a nuestra plataforma. Aquí encontrarás las mejores propiedades para buscar, comprar o vender desde la comodidad de tu hogar.</p>
            
            
            <div style="margin: 20px 0;">
                <a href="${process.env.BACKEND_URL}:${process.env.BACKEND_PORT ?? 3001}/auth/confirmAccount/${token}" 
                    style="background: linear-gradient(to right, #55738D, #CBC8C4); color: white; padding: 15px 25px; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold; display: inline-block; hover: background 0.3s ease-in-out;
                    "
                    onmouseover="this.style.background='linear-gradient(to right, #CBC8C4, #55738D)';"
                    onmouseout="this.style.background='linear-gradient(to right, #55738D, #CBC8C4)';"
                >
                    Confirmar cuenta
                </a>
            </div>
            
            <p style="font-size: 14px; margin-top: 20px; color: #666;">Si no creaste esta cuenta, ignora este mensaje.</p>
          </div>
          
         
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
         
          <div style="padding: 20px; text-align: center;">
            <img src="https://photos.app.goo.gl/CdALYPD5nPgBzgag7 " alt="Firma de CEO" style="width: 80px; height: 50px; object-fit: cover; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <p style="font-size: 14px; color: #666;">Atentamente,</p>
            <p style="font-size: 16px; font-weight: bold; margin: 0;">Tania Ibarra</p>
            <p style="font-size: 14px; color: #666;">CEO de BienesRaices_230369</p>
          </div>
          
          
          <footer style="background: #55738D; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">BienesRaices_230369 © ${new Date().getFullYear()}</p>
            <p style="margin: 0;">Este correo fue enviado automáticamente, por favor no respondas.</p>
          </footer>
        </div>
      </div>
    `,
  });
}

const emailOlvidePassword = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const { email, nombre, token } = datos

  //Enviar el email
  await transport.sendMail({
    from: 'BienesRaices_230369',
    to: email,
    subject: 'Reestablece tu contraseña en BienesRaices_230369',
    text: `Querido cliente, haz solicitado el cambio de contraseña de tu cuenta en BienesRaices_230369.`,
    html: `
       <div style="font-family: Arial, sans-serif; background: #f3f4f6; padding: 20px; margin: 0;">
          
          <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); overflow: hidden;">
            
            
            <div style="background: linear-gradient(to right, #55738D, #CBC8C4); padding: 20px; text-align: center;">
              <h1 style="margin: 0; color: white; font-size: 24px;">¡Bienvenido/a a <span style="color: linear-gradient(to right, #96A7B6, #FFFFFF);">BienesRaices_230369!</span></h1>
            </div>
            
            
            <div style="padding: 20px; text-align: center; color: #333;">
              <p style="font-size: 18px; margin: 10px 0;">Hola <span style="color: #000000; font-weight: bold;">${name}</span>, hemos recibido una solicitud de cambio de contraseña de tu cuenta ${email}</p>
              <p style="font-size: 16px; margin: 10px 0;">Haz click en el botón para acceder a tu cuenta de BienesRaices:</p>
              
              
              <div style="margin: 20px 0;">
                  <a href="${process.env.BACKEND_URL}:${process.env.BACKEND_PORT ?? 3001}/auth/passwordRecovery/${token}" 
                      style="background: linear-gradient(to right, #55738D, #CBC8C4); color: white; padding: 15px 25px; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold; display: inline-block; hover: background 0.3s ease-in-out;
                      "
                      onmouseover="this.style.background='linear-gradient(to right, #CBC8C4, #55738D)';"
                      onmouseout="this.style.background='linear-gradient(to right, #55738D, #CBC8C4)';"
                  >
                      Reestablacer contraseña
                  </a>
              </div>
              
              <p style="font-size: 14px; margin-top: 20px; color: #666;">Si no solicitaste este cambio, ignora este mensaje.</p>
            </div>
            
           
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            
           
            <div style="padding: 20px; text-align: center;">
              <img src="https://photos.app.goo.gl/CdALYPD5nPgBzgag7" alt="Firma de CEO" style="width: 80px; height: 50px; object-fit: cover; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <p style="font-size: 14px; color: #666;">Atentamente,</p>
              <p style="font-size: 16px; font-weight: bold; margin: 0;">Tania Ibarra</p>
              <p style="font-size: 14px; color: #666;">CEO de BienesRaices_230369</p>
            </div>

        <footer style="background: #55738D; color: white; padding: 15px; text-align: center; font-size: 12px;">
          <p style="margin: 0;">BienesRaices_230369 © ${new Date().getFullYear()}</p>
          <p style="margin: 0;">Este correo fue enviado automáticamente, por favor no respondas.</p>
        </footer>
    `,
});

}

export { emailRegistro, emailOlvidePassword }