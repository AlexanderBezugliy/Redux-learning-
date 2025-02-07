import { useDispatch, useSelector } from "react-redux";
import { AddUsers, ClearUsers, RemoveLastUsers } from "../action";
import { useState } from "react";


const Users = () => {
    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');

    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();


    const handleAddUser = () => {
        if (userName === '' || userSurname === '') return;

        const newUser = {
            name: userName,
            surname: userSurname,
        }

        dispatch(AddUsers(newUser));
        setUserName('');
        setUserSurname('');
    }

    const handleRemoveLastUser = () => {
        dispatch(RemoveLastUsers());
    }

    const handleClearUsers = () => {
        dispatch(ClearUsers());
    }

    return (
        <div style={{marginTop: '15px'}}>
            <h2>User List</h2>

            <ul>
                {users.map((user, index) => (
                    <li key={index} >
                        <p>{user.name} {user.surname}</p>      
                    </li>
                ))}
            </ul>

            <input 
                type="text" 
                placeholder="name users..."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />

            <input 
                type="text" 
                placeholder="surname users..."
                value={userSurname}
                onChange={(e) => setUserSurname(e.target.value)}
            />

            <button onClick={() => handleAddUser()} >Add User</button>
            <button onClick={() => handleRemoveLastUser()} disabled={users.length === 0} >Remove User</button>
            <button onClick={() => handleClearUsers()} disabled={users.length === 0} >Remove All User</button>
        </div>
    );
}

export default Users;