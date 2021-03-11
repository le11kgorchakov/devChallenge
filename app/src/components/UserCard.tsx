import React from 'react';

export interface UserCardOptions
{
    user: {
        firstName: string
        lastName: string
    }
    onUserRemove: any
}

export const UserCard: React.FC<UserCardOptions> = props =>
{
    const { user, onUserRemove } = props;
    return <div className="user-item">
        <div>
            <text>first name: {user.firstName} </text>
        </div>
        <div>
            <text>last name: {user.lastName}</text>
        </div>
        <div className="button-bar">
            <button className="button button-edit">Edit</button>
            <button className="button button-remove" onClick={onUserRemove}>Remove</button>
        </div>
    </div>
};