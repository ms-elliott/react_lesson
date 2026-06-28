import { useState } from "react"

const Form = ({createTodo}) => {
    const [newItem, setNewItem] = useState("")
    const addItem = (e) => {
        e.preventDefault();

        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: newItem
        };

        createTodo(newTodo);

        setNewItem("");
    }

    return (
        <div>
            <form onSubmit={addItem} action="/">
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => {
                        setNewItem(e.target.value)
                    }}
                />
                <button>
                    追加
                </button>
            </form>
        </div>
    )
}

export default Form;
