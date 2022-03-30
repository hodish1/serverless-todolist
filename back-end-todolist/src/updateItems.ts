import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";
import { response } from "./globals";
import dynamoDbService from "./services/dynamo.service";


export const handler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    try {
        const id = event.pathParameters.id;
        const data = JSON.parse(event.body);
        const todo = data;
        const result = await dynamoDbService.update(todo, id)
        return response(200, result)
    } catch (err) {
        return response(500, err)
    }


}