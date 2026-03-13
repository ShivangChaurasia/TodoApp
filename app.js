const { useState, useEffect } = React;

function TodoApp() {
    // State initialization
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editValue, setEditValue] = useState('');

    // Load from local storage on initial render
    useEffect(() => {
        const savedTodos = localStorage.getItem('react-todos');
        if (savedTodos) {
            try {
                setTodos(JSON.parse(savedTodos));
            } catch (e) {
                console.error("Failed to parse todos from local storage");
            }
        }
    }, []);

    // Save to local storage whenever todos change
    useEffect(() => {
        localStorage.setItem('react-todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;

        const newTodo = {
            id: Date.now().toString(), // Unique ID
            text: inputValue.trim(),
            createdAt: new Date().toLocaleString() // Timestamp
        };

        setTodos([newTodo, ...todos]);
        setInputValue('');
    };

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const startEdit = (todo) => {
        setEditingId(todo.id);
        setEditValue(todo.text);
    };

    const saveEdit = (id) => {
        if (editValue.trim() === '') return;
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, text: editValue.trim() } : todo
        ));
        setEditingId(null);
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditValue('');
    };

    return (
        <>
            <div className="app-container">
            {/* Lottie Animation (Cute Checkmark/Task Animation) */}
            <div className="lottie-container">
                <lottie-player 
                    src="https://assets2.lottiefiles.com/packages/lf20_q7uarxsb.json" 
                    background="transparent"  
                    speed="1"  
                    loop 
                    autoplay>
                </lottie-player>
            </div>
            
            <h1>Task Master</h1>
            
            <form className="input-section" onSubmit={handleAddTodo}>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="What needs to be done?" 
                />
                <button type="submit">
                    <i className="fas fa-plus"></i> Add
                </button>
            </form>

            <div className="todo-list">
                {todos.length === 0 ? (
                    <p className="empty-state">No tasks yet! Add one above.</p>
                ) : (
                    todos.map(todo => (
                        <div key={todo.id} className="todo-item">
                            <div className="todo-content">
                                {editingId === todo.id ? (
                                    <>
                                        <input 
                                            className="edit-input"
                                            type="text" 
                                            value={editValue}
                                            onChange={(e) => setEditValue(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') saveEdit(todo.id);
                                                if (e.key === 'Escape') cancelEdit();
                                            }}
                                            autoFocus
                                        />
                                        <div className="todo-actions">
                                            <button className="icon-btn save-btn" onClick={() => saveEdit(todo.id)} title="Save">
                                                <i className="fas fa-check"></i>
                                            </button>
                                            <button className="icon-btn delete-btn" onClick={cancelEdit} title="Cancel">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <span className="todo-text">{todo.text}</span>
                                        <div className="todo-actions">
                                            <button className="icon-btn edit-btn" onClick={() => startEdit(todo)} title="Edit">
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button className="icon-btn delete-btn" onClick={() => handleDelete(todo.id)} title="Delete">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="todo-meta">
                                <i className="far fa-clock"></i> {todo.createdAt}
                            </div>
                        </div>
                    ))
                )}
            </div>
            </div>
            
            <footer className="app-footer">
                <div className="social-links">
                    <a href="https://github.com/ShivangChaurasia" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/shivang-chaurasia-754232297/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </footer>
        </>
    );
}

// Render the App
const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(<TodoApp />);
