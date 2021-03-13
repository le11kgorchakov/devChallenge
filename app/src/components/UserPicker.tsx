import React, { useState } from "react"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, ButtonDropdown } from "reactstrap"
import { User } from "../app";


interface UserPickerProps
{
    user?: User[] | undefined
    onSelect?: any
}



const UserPicker: React.FC<UserPickerProps> = (props) =>
{
    const { user } = props
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [selectedUser, setSelectedUser] = useState("Assign User")

    const handleChange: React.MouseEventHandler<HTMLOptionElement> | undefined = (e) =>
    {
        setSelectedUser(e.currentTarget.value)
    }

    const hadleClear = (e: React.MouseEvent<HTMLElement, MouseEvent>) =>
    {
        setSelectedUser("Assign User")
    }

    return (
        <div>
            <Dropdown className="user-picker" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    {selectedUser}
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem header>available users</DropdownItem>
                    {user ? user.map((u: User) =>
                        < DropdownItem >
                            <option key={u.userId} onClick={(e) => handleChange(e)} >{u.firstName} {u.lastName} </option>
                        </DropdownItem>
                    ) : null}
                    <DropdownToggle onClick={(e) => hadleClear(e)}>Clear</DropdownToggle>
                </DropdownMenu>
            </Dropdown>
        </div >
    )
}
export default UserPicker