import { useDispatch, useSelector } from "react-redux";
import { AddUsers, ClearUsers, RemoveLastUsers } from "../action";


const Users = () => {
    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();

    const handleAddUser = () => {
        const newUser = {
            id: users.length + 1,
            // name: `User: ${id}`,
            name: `User ${users.length + 1}`,
        }

        dispatch(AddUsers(newUser));
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
                {users.map((user) => (
                    <li key={user.id} >
                        {user.name}
                    </li>
                ))}
            </ul>

            <button onClick={() => handleAddUser()} >Add User</button>
            <button onClick={() => handleRemoveLastUser()} disabled={users.length === 0} >Remove User</button>
            <button onClick={() => handleClearUsers()} disabled={users.length === 0} >Remove All User</button>
        </div>
    );
}

export default Users;