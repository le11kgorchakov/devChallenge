import React from 'react';

export interface TaskCardOptions
{
    task: {
        taskName: string
        description: string
    }
    onTaskRemove: any
    onTaskUpdate: any
}

export const TaskCard: React.FC<TaskCardOptions> = props =>
{
    const { task, onTaskRemove } = props;
    return <div className="user-item">
        <div>
            <text> Task Name: {task.taskName}</text>

        </div>
        <div>
            <text> Description: {task.description}</text>
        </div>
        <div className="button-bar">
            <button className="button button-edit">Edit</button>
            <button className="button button-remove" onClick={onTaskRemove}>Remove</button>
        </div>
    </div>
};