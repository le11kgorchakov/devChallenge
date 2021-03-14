import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

interface Props
{
    onUserSubmit: any;
}


const AddUser: React.FC<Props> = (props) =>
{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
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
        if (inputName == "firstName") setFirstName(e.target.value);
        else if (inputName == "lastName") setLastName(e.target.value);
    };
    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) =>
    {
        event.preventDefault();
        const user = {
            firstName: firstName,
            lastName: lastName,
        };
        props.onUserSubmit(user);
        setFirstName("");
        setLastName("");
    };
    return !isForm ? (
        <Button className="button button-edit" onClick={toggleForm}>Add User</Button>
    ) : (
        <Form inline>
            <FormGroup className="add-user">
                <Label>{"First Name"}</Label>
                <Input autoFocus type="text" name="firstName" value={firstName} placeholder="enter your first name" onChange={onChange} />
                <Label>{"Last Name"}</Label>
                <Input type="text" name="lastName" value={lastName} placeholder="enter your last name" onChange={onChange} />
                <Button className="button button-edit" onClick={handleSubmit}>Add</Button>
                <Button className="button button-remove" onClick={toggleForm}>Cancel</Button>
            </FormGroup>
        </Form>
    );
};
export default AddUser;
