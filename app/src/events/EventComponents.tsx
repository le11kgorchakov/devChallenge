import React from 'react'

const onChange: React.FC = () =>
{
    return (
        <div>
            <input onChange={(e) => console.log(e)} />
        </div>
    )
}

const onSubmit: React.FC = () =>
{
    return (
        <div>
            <input onSubmit={(e) => console.log(e)} />
        </div>
    )
}

