import React, { useEffect, useState } from 'react';
import
{
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import MyModal from './MyModal';
interface UserCardProps
{
    user: {
        firstName: string;
        lastName: string;
    };
    index: number;
    onUserRemove: any;
    onUserUpdate: any;
}
const UserCard: React.FC<UserCardProps> = (props) =>
{
    const {
        user,
        index,
        onUserRemove: onUserRemove,
        onUserUpdate: onUserUpdate,
    } = props;
    const [modal, setModal] = useState(false);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [isChange, setChange] = useState(false);
    const [userToUpdate, setUserToUpdate] = useState(user);
    useEffect(() =>
    {
        setChange(lastName !== user.lastName || firstName !== user.firstName);
        setUserToUpdate({ firstName: firstName, lastName: lastName });
    }, [firstName, lastName]);
    const toggleModal = () =>
    {
        setModal(!modal);
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        const inputName = e.target.name;
        if (inputName == "firstName") setFirstName(e.target.value);
        else if (inputName == "lastName") setLastName(e.target.value);
    };
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">User Information</CardTitle>
                    <div className="user-item">
                        <div>First Name: {user.firstName}</div>
                        <div>Last Name: {user.lastName}</div>
                        <div className="button-bar">
                            <Button className="button button-edit" onClick={toggleModal}>Edit</Button>
                            <Button className="button button-remove" onClick={onUserRemove}>Remove</Button>
                        </div>
                        {modal && (
                            <MyModal
                                dropDown={false}
                                size="sm"
                                show={modal}
                                title="Edit User Information"
                                className="custom-modal"
                                onModalDismiss={() => setModal(false)}
                                onModalUpdate={() => onUserUpdate(userToUpdate, index)}
                                saveEnabled={isChange}
                            >
                                <form>
                                    <div>
                                        {"First Name:"}
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            value={firstName}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div>
                                        {"Last Name: "}
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={lastName}
                                            onChange={onChange}
                                        />
                                    </div>
                                </form>
                            </MyModal>
                        )}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};
export default UserCard;