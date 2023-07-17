const hubspot = require('@hubspot/api-client');


export default async (req, res) => {

    const { name, email, message } = req.body;


    const hubspotClient = new hubspot.Client({ "accessToken": process.env.HUBSPOT_API_KEY});


    const properties = {
        "firstname" : name,
        "email" : email,
        "message" : message
    };

    const SimplePublicObjectInputForCreate = { properties, associations: []};

    try {
        const apiResponse = await hubspotClient.crm.contacts.basicApi.create(SimplePublicObjectInputForCreate);

        console.log(JSON.stringify(apiResponse, null, 2));

        return res.status(200).json({ success: true })
    
    } catch(e) {
        e.message === 'HTTP request failed' ?
        console.log(JSON.stringify(e.response, null, 2)) :
        console.log(e)
        return res.status(500).json({ error: "An error occured while sending contact to Hubspot"})
    }

    }