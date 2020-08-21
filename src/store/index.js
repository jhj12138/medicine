import Vue from 'vue'
import Vuex from 'vuex'

// import loginModule from './login'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        // login: loginModule,
    }
})

export default store