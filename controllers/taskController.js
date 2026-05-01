let tasks = [];

const getTasks = (req, res) => {
    res.status(200).json(tasks);
};

const getTask = (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json(task);
};

const createTask = (req, res) => {
    const { title } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === "") {
        return res.status(400).json({ error: "Valid title is required" });
    }

    const newTask = {
        id: tasks.length + 1,
        title: title
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
};

const updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    const { title } = req.body;

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    if (!title || typeof title !== 'string' || title.trim() === "") {
        return res.status(400).json({ error: "Invalid title" });
    }

    task.title = title;

    res.status(200).json(task);
};

const deleteTask = (req, res) => {
    const id = parseInt(req.params.id);

    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Task not found" });
    }

    tasks.splice(index, 1);

    res.status(200).json({ message: "Task deleted" });
};

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
};
