
export default function (req, res) {

  const data = JSON.stringify({
    "Email": req.body.email,
    "Name": req.body.name,
  })

    const key = process.env.MAKE_WEBHOOK;

    const config = {
      method: 'post',
      headers: { 
        'Content-Type': 'application/json', 
      },
      body : data
    };

    const request = fetch(`https://hook.eu1.make.com/lv8o9bwzdh24aiv7eew9lj9yv0ku5ds8`, config);

request
.then(function(response) {
  console.log(response.body);
})
.catch(function (error) {
  console.log(error);
})

res.send('success')

};



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
