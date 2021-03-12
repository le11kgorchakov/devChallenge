import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

interface MyModalProps
{
    title: string
    show: boolean
    className: string | undefined
    onModalDismiss: React.MouseEventHandler<HTMLButtonElement> | undefined
    onModalUpdate: React.MouseEventHandler<HTMLButtonElement> | undefined
    saveEnabled: boolean
}

const MyModal: React.FC<MyModalProps> = (props) =>
{
    const {
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
        <Modal isOpen={show} toggle={onModalDismiss} className={className}>
            <ModalHeader toggle={onModalDismiss}>{title}</ModalHeader>
            <ModalBody>
                {props.children}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate} disabled={!saveEnabled}>Save</Button>{' '}
                <Button color="secondary" onClick={onModalDismiss}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}

export default MyModal;