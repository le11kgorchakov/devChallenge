import React, { useState } from "react"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"
import { User } from "../app";


interface UserPickerProps
{
    users?: User[] | undefined
    onUserSelect: any
}



const UserPicker: React.FC<UserPickerProps> = (props) =>
{
    const { users, onUserSelect } = props
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [selectedUser, setSelectedUser] = useState<string>("")

    const handleChange = (user: User, index: number) =>
    {
        setSelectedUser(user.firstName + " " + user.lastName);
        onUserSelect(index);
    }

    // const handleClear = () =>
    // {
    //     setSelectedUser(null)
    // }
    console.log(selectedUser);

    return (
        <div>
            <Dropdown className="user-picker" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    {selectedUser ? selectedUser : "Assign User"}
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem header>available users</DropdownItem>
                    {users ? users.map((u: User, i) =>
                        < DropdownItem key={i} onClick={() => handleChange(u, i)}>
                            <option key={i}>{u.firstName} {u.lastName} </option>
                        </DropdownItem>
                    ) : null}
                    {/* <DropdownItem className="clear-button" onClick={() => handleClear}>Clear</DropdownItem> */}
                </DropdownMenu>
            </Dropdown>
        </div >
    )
}
export default UserPicker