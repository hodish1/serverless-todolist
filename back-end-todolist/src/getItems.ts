import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";
import dynamoDbService from "./services/dynamo.service";

export const handler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {

    const todos = await dynamoDbService.findAll()

    return {
        statusCode: 200,
        body: JSON.stringify(todos)
    }
}