import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import DropDown from './DropDown';
import UserPicker from './UserPicker';

interface MyModalProps
{
    userPicker: boolean
    dropDown: boolean
    size: string
    title: string
    show: boolean
    className: string
    onModalDismiss: React.MouseEventHandler<HTMLButtonElement> | undefined
    onModalUpdate: any
    saveEnabled: boolean
}
const MyModal: React.FC<MyModalProps> = (props) =>
{
    const {
        userPicker,
        dropDown,
        size,
        title,
        show,
        className,
        onModalDismiss,
        onModalUpdate,
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
                    {userPicker && <UserPicker />}
                </Form>


            </ModalHeader>
            <ModalBody>
                {props.children}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate} disabled={!saveEnabled}>Save</Button>
                <Button color="secondary" onClick={onModalDismiss}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}
export default MyModal;