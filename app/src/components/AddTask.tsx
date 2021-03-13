import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
interface AddTaskProps
{
    onTaskSubmit: any;
}
const AddTask: React.FC<AddTaskProps> = (props) =>
{
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const [isForm, setForm] = useState<Boolean>(false);
    const toggleForm:
        | React.MouseEventHandler<HTMLButtonElement>
        | undefined = () =>
        {
            setForm(!isForm);
        };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        const inputName = e.target.name;
        if (inputName == "taskName") setTaskName(e.target.value);
        else if (inputName == "description") setDescription(e.target.value);
    };
    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) =>
    {
        event.preventDefault();
        const task = {
            taskName: taskName,
            description: description,
        };
        props.onTaskSubmit(task);
        setTaskName("");
        setDescription("");
    };
    return !isForm ? (
        <Button className="button button-edit" onClick={toggleForm}>
            Add Task
        </Button>
    ) : (
        <Form inline={false}>
            <FormGroup className="add-user">
                <Label>{"Task Name"}</Label>
                <Input
                    type="text"
                    name="taskName"
                    value={taskName}
                    placeholder="enter task name"
                    onChange={onChange}
                />
                <Label>{"Description"}</Label>
                <Input
                    type="textarea"
                    name="description"
                    value={description}
                    placeholder="enter description"
                    onChange={onChange}
                />
                <Button className="button button-edit" onClick={handleSubmit}>
                    Add
        </Button>
                <Button className="button button-remove" onClick={toggleForm}>
                    Cancel
        </Button>
            </FormGroup>
        </Form>
    );
};
export default AddTask;