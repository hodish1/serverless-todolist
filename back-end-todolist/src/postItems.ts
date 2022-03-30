import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult,
    Context
} from "aws-lambda";
import { response } from "./globals";
import dynamoDbService from "./services/dynamo.service";

export const handler = async (
    event: APIGatewayProxyEvent,
    context: Context
): Promise<APIGatewayProxyResult> => {
    try {
        const data = JSON.parse(event.body);
        const todo = data;
        const result = await dynamoDbService.new(todo, context)
        return response(201, result)
    } catch (err) {
        return response(500, err)
    }


}