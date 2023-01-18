
import axios from "axios";

var data = JSON.stringify({
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

var config = {
  method: 'post',
  url: 'https://api.mailjet.com/v3.1/send',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': process.env.MJ_BASIC_KEY
  },
  data : data
};

export async function sendEmail() {
return await axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
}

