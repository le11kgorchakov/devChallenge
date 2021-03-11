import * as React from 'react'
import './app.css'
import { UserCard } from './components/UserCard';
import { AddUser } from './components/AddUser';
import { AddTask } from './components/AddTask';
import { TaskCard } from './components/TaskCard';

const database = {
    tasks: [],
    users: [
        { userId: 1, firstName: 'mark', lastName: 'twain' },
        { userId: 2, firstName: 'tom', lastName: 'sawyer' },
    ],
}

interface AppState
{
    tasks?: any[]
    users?: User[]
    newUser?: User
    newTask?: any
}

export interface User
{
    firstName: string
    lastName: string
    userId: number
    onUserSubmit?: any
    onUserUpdate?: any
}

export interface Task
{
    taskName: string
    description: string
    taskId: number
    onTaskSubmit?: any
    onTaskUpdate?: any
}

export class App extends React.Component<any, AppState> {
    state: AppState = {
        tasks: [],
        users: [],
        newUser: {} as User,
        newTask: {} as Task
    }

    async componentDidMount()
    {
        // choose one of the methods below for a data source

        // 1. use the data from above
        const { tasks, users } = database

        // 2. use the real api / database - you must start one of the api services and the mssql server docker container
        // const [tasks, users] = await Promise.all([
        //   (await fetch('http://localhost:5000/tasks')).json(),
        //   (await fetch('http://localhost:5000/users')).json(),
        // ]);

        this.setState({
            tasks,
            users
        })
    }

    handleUserSubmit = (user: User) => {
        this.setState((prevState) => ({
            users: [...(prevState.users ?? []), user]
        }));
    }

    handleUserRemove = (user: User) => {
        this.setState((prevState) => ({
            users: prevState.users?.filter(u => u !== user)
        }));
    }

    handleUserUpdate = (user: User) => {

    }

    handleTaskSubmit = (task: Task) => {
        this.setState((prevState) => ({
            tasks: [...(prevState.tasks ?? []), task]
        }));
    }

    handleTaskRemove = (task: Task) =>
    {
        this.setState((prevState) => ({
            tasks: prevState.tasks?.filter(t => t !== task)
        }));
    }

    handleTaskUpdate = (task: Task) => {

    }

    render()
    {
        return (
            <div className='app'>
                <h1>inMotionNow Developer Challenge</h1>
                <h2>Users</h2>
                <ul>
                    {this.state.users?.map(user =>
                        <li>
                            <UserCard user={user}
                                      key={user.userId}
                                      onUserRemove={() => this.handleUserRemove(user)}
                                      onUserUpdate={this.handleUserUpdate}/>
                        </li>)
                    }
                </ul>
                <AddUser onUserSubmit={this.handleUserSubmit} />
                <h2>Tasks</h2>
                <ul>
                    {this.state.tasks?.map(task =>
                        <li>
                            <TaskCard task={task}
                                      key={task.taskId}
                                      onTaskRemove={() => this.handleTaskRemove(task)}
                                      onTaskUpdate={this.handleTaskUpdate}/>
                        </li>)
                    }
                </ul>
                <AddTask onTaskSubmit={this.handleTaskSubmit} />
            </div>
        )
    }
}