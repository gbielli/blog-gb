// import fetch from 'node-fetch';

// const handler = async (req, res) => {

//   let url = `https://hook.eu1.make.com/c57kxsdczfsm0g72rprpjermmm22xp2e`;

//   try {
//     const response = await fetch(url, {
//       headers: {
//         Accept: 'application/json',
//       },
//     });

//     if (!response.ok) {
//       res.status(response.status).json(response.statusText);
//     }
//     const data = await response.json();

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// export default handler; 