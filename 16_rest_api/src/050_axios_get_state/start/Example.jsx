import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"

const Example = () => {
    // 空の配列を初期値で渡すことでundefinedとならない。(エラーにならない)
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        const getUser = async () => {
            const res = await axios.get('https://localhost:3003/user')
            setUsers(res.data)
        }
        getUser();
        // 第２引数に必ず空の配列を渡す。（忘れると無限ループで実行される）
    }, [])

    return (
        <div>
            {users.map(user => {
                return (
                    <div key={user.id}>
                        <h3>{user.username}</h3>
                        <p>age: {user.age}</p>
                        <p>hobby: {user.hobbies.join(',')}</p>
                    </div>
                )
            })}
        </div>
    )
};

export default Example;
