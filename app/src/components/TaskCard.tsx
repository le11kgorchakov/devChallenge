import React, { useEffect, useState } from "react";
import
{
    Card, CardBody,
    CardTitle, Button, CardSubtitle, Form, Input, FormGroup, Label, CardHeader, Badge
} from 'reactstrap';
import { User } from "../app";
import MyModal from "./MyModal";
interface TaskCardProps
{
    users: User[] | undefined
    task: {
        taskName: string;
        description: string;
        selectedUser?: any
        status?: string
    };
    index: number;
    onTaskRemove: any;
    onTaskUpdate: any;
}
const TaskCard: React.FC<TaskCardProps> = (props) =>
{
    const {
        users,
        task,
        index,
        onTaskRemove: onTaskRemove,
        onTaskUpdate: onTaskUpdate,

    } = props;
    const [modal, setModal] = useState(false);
    const [isChange, setChange] = useState(false);
    const [taskName, setTaskName] = useState(task.taskName);
    const [description, setDescription] = useState(task.description);
    const [selectedUser, setSelectedUser] = useState(task.selectedUser || undefined);
    const [taskToUpdate, setTaskToUpdate] = useState(task);
    const [statusBadge, setStatusBadge] = useState<string>()

    useEffect(() =>
    {
        setChange(taskName !== task.taskName || description !== task.description || selectedUser !== task.selectedUser || statusBadge !== status);
        setTaskToUpdate({ taskName: taskName, description: description, selectedUser: selectedUser });
    }, [taskName, description, selectedUser, statusBadge]);

    const toggleModal = () =>
    {
        setModal(!modal);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        const inputName = e.target.name;
        if (inputName == "taskName") setTaskName(e.target.value);
        else if (inputName == "description") setDescription(e.target.value);
    };

    const handleUserSelect = (index: number) =>
    {
        setSelectedUser(index);
    }

    const handleStatusChange = (status: string) =>
    {
        setStatusBadge(status)
    }

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle tag="h5">{`Task: ${task.taskName}`}</CardTitle>
                    <div>
                        <Badge variant="light">{statusBadge ? statusBadge : "New Task"}</Badge>&nbsp;
                        {task.selectedUser && <Badge variant="light">{task.selectedUser || task.selectedUser === 0 ? task.selectedUser : "assign user"}</Badge>}
                    </div>
                </CardHeader>
                <CardSubtitle>


                </CardSubtitle>
                <CardBody>
                    <div className="user-item">
                        <div className="task-description" >
                            {"Description:"} {task.description}
                        </div>
                        <div className="button-bar">
                            <Button className="button button-edit" onClick={toggleModal}>Edit</Button>
                            <Button className="button button-remove" onClick={onTaskRemove}>Remove</Button>
                        </div>
                        {modal && (
                            <MyModal
                                users={users}
                                userPicker={true}
                                dropDown={true}
                                size="lg"
                                show={modal}
                                title={`Task: ${task.taskName}`}
                                className="custom-modal"
                                onModalDismiss={() => setModal(false)}
                                onModalUpdate={() => onTaskUpdate(taskToUpdate, index)}
                                onUserSelect={handleUserSelect}
                                onStatusChange={handleStatusChange}
                                saveEnabled={isChange}
                            >
                                <div>
                                    <Form>
                                        <FormGroup className="add-user">
                                            <Label>{"Task Name"}</Label>
                                            <Input
                                                type="text"
                                                name="taskName"
                                                placeholder="task name"
                                                value={taskName}
                                                onChange={onChange}
                                            />
                                            <Label>{"Description"}</Label>
                                            <Input
                                                type="textarea"
                                                name="description"
                                                placeholder="description"
                                                value={description}
                                                onChange={onChange}
                                            />
                                        </FormGroup>
                                    </Form>
                                </div>
                            </MyModal>
                        )}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};
export default TaskCard;