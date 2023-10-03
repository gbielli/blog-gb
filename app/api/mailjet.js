import * as mailjet from 'node-mailjet';

export default async (req, res) => {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }

  const { name, email, message } = req.body;

  // Votre clé d'API et secret de Mailjet
  const mailjetApiKey = process.env.MJ_APIKEY_PUBLIC;
  const mailjetApiSecret = process.env.MJ_APIKEY_PRIVATE;

  const mailjetClient = mailjet.apiConnect(mailjetApiKey, mailjetApiSecret);

  const request = mailjetClient.post('send', { version: 'v3.1' }).request({
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
    const response = await request;
    console.log(response.body);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while sending the email.' });
  }
};
