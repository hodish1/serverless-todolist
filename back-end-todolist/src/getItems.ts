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
        const todos = await dynamoDbService.findAll()
        return response(200, todos)
    } catch (err) {
        return response(500, err)
    }

}