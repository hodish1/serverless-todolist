import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult,
    Context
} from "aws-lambda";
import dynamoDbService from "./services/dynamo.service";

export const handler = async (
    event: APIGatewayProxyEvent,
    context: Context
): Promise<APIGatewayProxyResult> => {

    const data = JSON.parse(event.body);
    const todo = data;
    const result = await dynamoDbService.new(todo, context)

    return {
        statusCode: 201,
        body: JSON.stringify(result)
    }
}