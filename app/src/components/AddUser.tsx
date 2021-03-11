import React, { useState } from 'react';
import { useForm } from 'react-hook-form'

interface Props
{
    onUserSubmit: any
}

export const AddUser: React.FC<Props> = (props) =>
{
    const { register } = useForm<{ firstName: string, lastName: string }>();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isForm, setForm] = useState<Boolean>(false);

    const toggleForm: React.MouseEventHandler<HTMLButtonElement> | undefined = () =>
    {
        setForm(!isForm);
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        const inputName = e.target.name;

        if (inputName == 'firstName')
            setFirstName(e.target.value)
        else if (inputName == 'lastName')
            setLastName(e.target.value)
    }

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) =>
    {
        event.preventDefault();
        const user = {
            firstName: firstName,
            lastName: lastName
        };
        props.onUserSubmit(user);
        setFirstName("");
        setLastName("");
    }
    const useValidation = () =>
    {
        register({ required: true, pattern: /^[A-Za-z]+$/i, maxLength: 20 })
    }

    return (!isForm ?
        <button onClick={toggleForm}>Add User</button>
        :
        <div className="add-user">
            Enter Data for new user:
            <form>
                <input type="text" name="firstName" placeholder="first name" value={firstName} onChange={onChange} ref={useValidation} />
                <input type="text" name="lastName" placeholder="last name" value={lastName} onChange={onChange} ref={useValidation} />
                <button onClick={handleSubmit}>Add</button>
                <button onClick={toggleForm}>Cancel</button>
            </form>
        </div>)
}