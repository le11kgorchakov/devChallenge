import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import { User } from '../app';
import DropDown from './DropDown';
import UserPicker from './UserPicker';

interface MyModalProps
{
    users?: User[] | undefined
    userPicker: boolean
    dropDown: boolean
    size: string
    title: string
    show: boolean
    className: string
    onModalDismiss: React.MouseEventHandler<HTMLButtonElement> | undefined
    onModalUpdate: any
    onUserSelect?: any
    saveEnabled: boolean
}
const MyModal: React.FC<MyModalProps> = (props) =>
{
    const {
        users,
        userPicker,
        dropDown,
        size,
        title,
        show,
        className,
        onModalDismiss,
        onModalUpdate,
        onUserSelect,
        saveEnabled
    } = props;
    const handleUpdate: React.MouseEventHandler<HTMLButtonElement> | undefined = (e) =>
    {
        if (onModalDismiss && onModalUpdate)
        {
            onModalUpdate(e);
            onModalDismiss(e)
        }
    }
    return (
        <Modal size={size} isOpen={show} toggle={onModalDismiss} className={className}>
            <ModalHeader toggle={onModalDismiss}>{title}
                <Form inline>
                    {dropDown && <DropDown />}
                    {userPicker && <UserPicker onUserSelect={onUserSelect} users={users} />}
                </Form>
            </ModalHeader>
            <ModalBody>
                {props.children}
            </ModalBody>
            <ModalFooter>
                {/* <Button color="primary" onClick={handleUpdate} disabled={!saveEnabled}>Save</Button> */}
                <Button color="primary" onClick={handleUpdate}>Save</Button>
                <Button color="secondary" onClick={onModalDismiss}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
export default MyModal;

// pass selected user down to TaskCard
// and show it on use Badge