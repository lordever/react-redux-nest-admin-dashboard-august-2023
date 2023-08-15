import {Injectable} from '@nestjs/common';
import {CreateTaskDto, TaskModel} from "@shared/models/task.model";

@Injectable()
export class TaskService {
    private tasks: TaskModel[] = [];

    createTask(createTaskDto: CreateTaskDto) {
        const task: TaskModel = {
            id: Date.now().toString(),
            ...createTaskDto,
        };
        this.tasks.push(task);
        return task;
    }

    getAll(): TaskModel[] {
        return this.tasks;
    }
}
