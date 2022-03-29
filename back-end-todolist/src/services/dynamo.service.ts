import { DynamoDB } from 'aws-sdk';
import { Todo } from '../entities/todo';
import { Context } from 'aws-lambda';
import {
    DocumentClient as DocClient
} from 'aws-sdk/lib/dynamodb/document_client';


class DynamoDbService {

    private dynamo?: DynamoDB.Types.DocumentClient;

    constructor() {
        this.dynamo = new DynamoDB.DocumentClient({ apiVersion: '2012-08-10', region: "eu-central-1" });
    }

    async getItemById(id: number): Promise<any> {
        const params: DynamoDB.DocumentClient.GetItemInput = {
            TableName: 'todos',
            Key: {
                id
            }
        };
        return this.dynamo?.get(params).promise();
    }

    async findAll(): Promise<any> {
        const params: DynamoDB.DocumentClient.ScanInput = {
            TableName: 'todos',
        };
        return this.dynamo?.scan(params).promise();
    }

    async new(todo: Partial<Todo>, context: Context): Promise<any> {
        var params: DocClient.PutItemInput = {
            Item: {
                todoId: context.awsRequestId,
                createdAt: + new Date(),
                done: todo.done,
                todo: todo.todo
            },
            ReturnConsumedCapacity: "TOTAL",
            TableName: "todos"
        };
        return this.dynamo?.put(params).promise();
    }

    async update(todo: Partial<Todo>, id : string): Promise<any> {
        var params: DocClient.Update = {
            TableName:"todos",
            Key:{
                "todoId": id
            },
            UpdateExpression: "set todo = :todo , done = :done ",
            ExpressionAttributeValues:{
                ":done": todo.done,
                ":todo": todo.todo
            }
        };
        return this.dynamo?.update(params).promise();
    }

    async delete(id : string): Promise<any> {
        var params: DocClient.Delete = {
            TableName:"todos",
            Key:{
                "todoId": id
            }
        };
        return this.dynamo?.delete(params).promise();
    }


}


export default new DynamoDbService() as DynamoDbService; 