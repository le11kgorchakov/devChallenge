import React, { FormEventHandler, useEffect, useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

interface StatusDropDownProps
{
    onStatusChange: any
}

const StatusDropDown: React.FC<StatusDropDownProps> = (props) =>
{
    const { onStatusChange } = props
    const option = ["ToDo", "InProgress", "Completed"]
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [status, setStatus] = useState<string>(option[0])
    const toggle = () => setDropdownOpen(prevState => !prevState);


    const handleChange: React.MouseEventHandler<HTMLOptionElement> | undefined = (e) =>
    {
        const selectedStatus = e.currentTarget.value
        setStatus(selectedStatus)
        onStatusChange(selectedStatus)
    }

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret >
                {status}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Task Status</DropdownItem>
                <DropdownItem >
                    <option key={option[0]} onClick={(e) => handleChange(e)} value="ToDo"  > {option[0]} </option>
                </DropdownItem>
                <DropdownItem >
                    <option key={option[1]} onClick={(e) => handleChange(e)} value="InProgress"  > {option[1]} </option>
                </DropdownItem>
                <DropdownItem >
                    <option key={option[2]} onClick={(e) => handleChange(e)} value="Completed"  > {option[2]} </option>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
export default StatusDropDown;
