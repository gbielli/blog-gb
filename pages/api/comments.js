import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphCmsToken = process.env.GRAPHCMS_TOKEN

export default async function comments(req, res) {

    const graphQLClient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${graphCmsToken}`
        }
    })

    const query = gql`
    mutation CreateComment($name : String!, $email: String!, $comment: String!, $slug: String!) {
        createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }`

    try {

        const result = await graphQLClient.request(query, req.body);
        return res.status(200).send(result);
    }
    catch (e) {
        console.log(e);
        return res.status(500).send(`An error occured while sending comment to GraphCMS ${e}`)
    }
    

}