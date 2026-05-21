export const users = [
    {id: 1, name:"abc"},
    {id: 2, name:"xyz"}
];

export async function GET(){
    return Response.json(users);
}

export async function POST(req: Request){

    const user = await req.json();
    users.push(user);

    return new Response(JSON.stringify(user),{
        headers: {
            "Content-Type" : "application/json"
        },
        status: 201
    })
}