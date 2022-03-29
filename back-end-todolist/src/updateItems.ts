import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";
import dynamoDbService from "./services/dynamo.service";


export const handler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {

    const id = event.pathParameters.id;
    const data = JSON.parse(event.body);
    const todo = data;
    const result = await dynamoDbService.update(todo, id)
    
    return {
        statusCode: 200,
        body: JSON.stringify({result})
    }

}