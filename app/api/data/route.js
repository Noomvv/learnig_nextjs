export async function GET(request) {
    const data = {
        name: 'Vladimir',
        age: 30,
        bio: 'Software Engineer',
    }

    return new Response(JSON.stringify(data));
}

export async function POST(request) {
    

    return new Response(request.body);
}