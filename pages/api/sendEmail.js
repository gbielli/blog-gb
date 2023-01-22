import Mailjet from "node-mailjet";

export default function (req, res) {
    console.log(req.body)

    const mailjet = Mailjet.apiConnect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE,);

    const request = mailjet
	.post("send", {'version': 'v3.1'})
	.request({
        Messages: [
            {
              From: {
                Email: 'hello@guillaumebielli.fr',
                Name: 'Guillaume',
              },
              To: [
                {
                  Email: req.body.email,
                  Name: req.body.name,
                },
              ],
              TemplateID: 4388766,
              TemplateLanguage: true,
              Subject: `🚀  Tadam ${req.body.name}, Voilà mon CV.`,
            },
          ],
        SandboxMode: true
	})

    request
	.then((result) => {
			var obj = JSON.stringify(result.body);
			console.log(obj)
			var json =  JSON.parse(obj);
			var messages = json['Messages'];

			for (const message of messages) {
				var mess = message.Status;
				console.log(mess);
			};
		}
	)
	.catch((err) => {
		console.log(err.statusCode)
	})

    res.send('success')

  };

