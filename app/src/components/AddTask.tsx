import React, { useState } from 'react';
import { useForm } from 'react-hook-form'

interface Props
{
    onTaskSubmit: any
}

export const AddTask: React.FC<Props> = (props) =>
{
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [isForm, setForm] = useState<Boolean>(false);

    const toggleForm: React.MouseEventHandler<HTMLButtonElement> | undefined = () =>
    {
        setForm(!isForm);
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        const inputName = e.target.name;

        if (inputName == 'taskName')
            setTaskName(e.target.value)
        else if (inputName == 'description')
            setDescription(e.target.value)
    }

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) =>
    {
        event.preventDefault();
        const task = {
            taskName: taskName,
            description: description
        }
        props.onTaskSubmit(task);
        setTaskName("");
        setDescription("")
    }

    return (!isForm ?
        <button onClick={toggleForm}>Add Task</button>
        :
        <div className="add-user">
            Enter Task Name:
            <form>
                <input type="text" name="taskName" placeholder="task name" value={taskName} onChange={onChange} />
                <input type="text" name="description" placeholder="description" value={description} onChange={onChange} />
                <button onClick={handleSubmit}>Add</button>
                <button onClick={toggleForm}>Cancel</button>
            </form>
        </div>)
}