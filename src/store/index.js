import { observable, action, makeObservable } from 'mobx'

class AppStore {
    constructor() {
        makeObservable(this)
    }
    @observable time = 'ass'
    @observable todos = [{ id: 1, content: 'asd', done: true }]
    @action addTodo(todo) {
        this.todos.push(todo)
    }
    @action deleteTodo(id) {
        this.todos = this.todos.filter(v => v.id !== id)
    }
    @action resetTodo() {
        this.todos = []
    }
    @action editTodo(id, con) {
        this.todos.map(v => v.id === id ? v.content = con : '')
    }
    @action checkItem(id) {
        this.todos.map(v => v.id === id ? v.done = !v.done : '')
    }
    @action deleteDone() {
        this.todos = this.todos.filter(v => v.done !== true)
    }

}

const store = new AppStore()

export default store