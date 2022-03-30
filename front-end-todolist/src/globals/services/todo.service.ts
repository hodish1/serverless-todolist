import { Todo } from "../entities/todo.entity";
import httpService from "./http.service";

class TodoService {

    async get() {
        const items = await httpService.get('items');
        return items.Items.sort((a : Todo, b : Todo) => (a.createdAt > b.createdAt) ? 1 : -1);
    }

    async post(todo: Partial<Todo>) {
        return httpService.post('items', todo);
    }

}

export default new TodoService() as TodoService;