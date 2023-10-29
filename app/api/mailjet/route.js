import * as mailjet from 'node-mailjet';

export async function POST(request)  {

    const { name, email, message } = await request.json();

  // Votre clé d'API et secret de Mailjet
  const mailjetApiKey = process.env.MJ_APIKEY_PUBLIC;
  const mailjetApiSecret = process.env.MJ_APIKEY_PRIVATE;

  const mailjetClient = mailjet.apiConnect(mailjetApiKey, mailjetApiSecret);

  const sendEmail = mailjetClient.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'hello@guillaumebielli.fr',
          Name: 'Guillaume',
        },
        To: [
          {
            Email: 'guillaume.bielli@gmail.com',
            Name: 'guillaume',
          },
        ],
        Subject: 'Nouveau message de contact',
        TextPart: `Nom: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
      },
    ],
  });

  try {
    const response = await sendEmail;
    console.log(response.body);
    return Response.json({ success: true});
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'An error occurred while sending the email.' });
  }
}; 
