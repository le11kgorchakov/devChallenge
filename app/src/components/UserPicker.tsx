import React, { useState } from "react"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"
import { User } from "../app";


interface UserPickerProps
{
    user?: User[] | undefined
    onUserSelect?: any
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
        console.log(selectedUser)

    }

    const hadleClear: React.MouseEventHandler<HTMLElement> | undefined = (e) =>
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
                    <DropdownItem className="clear-button" onClick={(e) => hadleClear(e)}>Clear</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div >
    )
}
export default UserPicker