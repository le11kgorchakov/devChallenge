import React, { FormEventHandler, useEffect, useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { ProgressPlugin } from 'webpack';


const DropDown: React.FC = () =>
{
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [status, setStatus] = useState()
    const [isChange, setChange] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const option = ["ToDO", "InProgress", "Completed"]


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        DropdownItem.name === 'ToDo' ? console.log('test') : console.log('no')
        console.log('block')
        e.preventDefault();
        const test = e.target.accessKey
        console.log(test)
        const ddOption = e.target.name
        if (ddOption === 'ToDo')
        {
            console.log('todo')
        } else if (ddOption === 'InProgress')
        {
            console.log('inprogress')
        } else
        {
            console.log('completed')
        }
    }

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret value={status}>
                {status}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Task Status</DropdownItem>
                <DropdownItem key={option[0]} onChange={() => handleChange} value="ToDo" >{option[0]}</DropdownItem>
                <DropdownItem key={option[1]} onClick={() => handleChange} value="InProgress" > {option[1]}</DropdownItem>
                <DropdownItem key={option[2]} onClick={() => handleChange} value="Completed" >{option[2]}</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
export default DropDown;
