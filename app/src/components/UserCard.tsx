import React, { useState, useEffect } from 'react';
import MyModal from './MyModal';

export interface UserCardOptions
{
    user: {
        firstName: string
        lastName: string
    }
    onUserRemove: any
    onUserUpdate: any
}

export const UserCard: React.FC<UserCardOptions> = props =>
{
    const { user, onUserRemove, onUserUpdate } = props;
    const [modal, setModal] = useState(false);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [isChange, setChange] = useState(false);

    useEffect(() => {
        setChange(lastName === user.lastName || firstName === user.firstName);
    }, [firstName, lastName])

    const toggleModal = () => {
        setModal(!modal);
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        const inputName = e.target.name;

        if (inputName == 'firstName')
            setFirstName(e.target.value)
        else if (inputName == 'lastName')
            setLastName(e.target.value)
    }

    return <div className="user-item">
        <div>
            <text>First Name: {user.firstName} </text>
        </div>
        <div>
            <text>Last Name: {user.lastName}</text>
        </div>
        <div className="button-bar">
            <button className="button button-edit" onClick={toggleModal}>Edit</button>
            <button className="button button-remove" onClick={onUserRemove}>Remove</button>
        </div>
        {modal && <MyModal
			show={modal}
			title="Edit User Information"
			className="custom-modal"
			onModalDismiss={() => setModal(false)}
			onModalUpdate={onUserUpdate}
			saveEnabled={isChange}>
			<form>
				<input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={onChange} />
				<input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={onChange} />
			</form>
		</MyModal>}
    </div>
};