import { observable } from 'mobx'

class AppStore {
    @observable time = ''
    @observable todos = []

}

const store=new AppStore()

export default store