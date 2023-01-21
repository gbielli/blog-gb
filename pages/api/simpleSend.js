
export const sendEmail = async () => {

    const body = JSON.stringify({
        "Messages": [
            {
            "From": {
                "Email": "hello@guillaumebielli.fr",
                "Name": "Mailjet Pilot"
            },
            "To": [
                {
                "Email": "guillaume.bielli@gmail.com",
                "Name": "passenger 1"
                }
            ],
            "Subject": "Your email flight plan!",
            "TextPart": "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
            "HTMLPart": ">Dear passenger 1, welcome to Mailjet! May the delivery force be with you!"
            }
        ]
        });

          
  const config = {
    method: 'post',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': process.env.MJ_BASIC_KEY
    },
    body : body
  };


return (
    await fetch('https://api.mailjet.com/v3.1/send', config)
    .then(function(response) {
            console.log(JSON.stringify(response.body));
        })
        .catch(function (error) {
            console.log(error);
        })
  )

};
