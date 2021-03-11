import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MyModal = (props: any) => {
    const {
        title,
        show,
        className,
        onModalDismiss,
        onModalUpdate
    } = props;

    const handleUpdate = () => {
        onModalUpdate();
        onModalDismiss();
    }

    return (
        <Modal isOpen={show} toggle={onModalDismiss} className={className}>
            <ModalHeader toggle={onModalDismiss}>{title}</ModalHeader>
            <ModalBody>
                {props.children}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>Save</Button>{' '}
                <Button color="secondary" onClick={onModalDismiss}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}

export default MyModal;