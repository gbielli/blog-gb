import { GraphQLClient, gql } from "graphql-request";
import { NextResponse } from "next/server";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphCmsToken = process.env.GRAPHCMS_TOKEN

export async function POST(request) {

    const { name, email, comment, slug } = await request.json();

    const graphQLClient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${graphCmsToken}`
        }
    })

    const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
        createComment(data: {
            name: $name,
            email: $email,
            comment: $comment,
            post: { connect: { slug: $slug } }
        }) {
            id
        }
    }
`;
      

    try {

        const result = await graphQLClient.request(query, {
            name,
            email,
            comment,
            slug
        });

        return NextResponse.json({ success: true}, {status: 200});
    }
    catch (e) {
        console.error(e)
        return NextResponse.json({ success: false}, {status: 500});
      
    }
    

}