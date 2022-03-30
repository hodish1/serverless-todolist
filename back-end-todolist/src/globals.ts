export const response = (statusCode: number, body: any) => {
    return {
        statusCode: statusCode,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(body),
    };
}