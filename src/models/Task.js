const tasks = [];
let idCounter = 1;

class Task {
    constructor(title, description) {
        this.id = idCounter++;
        this.title = title;
        this.description = description;
        this.createdAt = new Date();
    }

    static findAll() {
        return tasks;
    }

    static findById(id) {
        return tasks.find(task => task.id === id);
    }

    static create(title, description) {
        const task = new Task(title, description);
        tasks.push(task);
        return task;
    }

    static update(id, title, description) {
        const task = this.findById(id);
        if (task) {
            task.title = title || task.title;
            task.description = description || task.description;
            return task;
        }
        return null;
    }

    static delete(id) {
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            return tasks.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = Task;