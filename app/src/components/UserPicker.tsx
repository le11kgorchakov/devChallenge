import React, { useState } from "react"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"
import { User } from "../app";


interface UserPickerProps
{
    user?: {
        firstName: string
        lastName: string
    }
}



const UserPicker: React.FC<UserPickerProps> = (props) =>
{
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);


    return (
        <div>
            <Dropdown className="user-picker" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    Assign User
  </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem>Users</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
export default UserPicker