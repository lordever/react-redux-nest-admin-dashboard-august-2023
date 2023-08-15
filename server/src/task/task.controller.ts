import {Body, Controller, Get, Post} from '@nestjs/common';
import {TaskService} from './task.service';
import {CreateTaskDto, TaskModel} from "@shared/models/task.model";

@Controller("task")
export class TaskController {
    constructor(private readonly taskService: TaskService) {
    }

    @Get()
    getAll(): TaskModel[] {
        return this.taskService.getAll();
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto) {
        return this.taskService.createTask(createTaskDto);
    }
}
