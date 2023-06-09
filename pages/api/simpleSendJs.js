const fetch = require('node-fetch');

const handler = async (req, res) => {

  const data = JSON.stringify({
    "Email": req.body.email,
    "Name": req.body.name,
    "Message": req.body.message,
  })

    const key = process.env.MAKE_WEBHOOK;

    const config = {
      method: 'post',
      headers: { 
        'Content-Type': 'application/json', 
      },
      body : data
    };

    const request = await fetch(`https://hook.eu1.make.com/c57kxsdczfsm0g72rprpjermmm22xp2e`, config);

request 
.then(function(response) {
  console.log(response.body);
})
.catch(function (error) {
  console.log(error);
})

res.send('success')

};

export default handler;



// sendEmail = async () => {

//     const body = JSON.stringify({
//                 "Email": "guillaume.bielli@gmail.com",
//                 "Name": "Mailjet Pilot"
//     })

//     const key = process.env.MAKE_WEBHOOK;

          
//   const config = {
//     method: 'post',
//     headers: { 
//       'Content-Type': 'application/json', 
//     },
//     body : body
//   };




// return (
//     await fetch(`https://hook.eu1.make.com/lv8o9bwzdh24aiv7eew9lj9yv0ku5ds8`, config)
//     .then(function(response) {
//             console.log(JSON.stringify(response.body));
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
//   )

// };
