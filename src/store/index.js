import Vuex from 'vuex'
import Vue from 'vue'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: []
    },
    mutations: {
        cambiarCart: (state, payload) => {
            if(payload){
                state.cart = payload;
            }
        }
    },
    actions: {
        setCart: ({ commit }, payload) => {
            return new Promise((resolve) => {
                commit("cambiarCart", payload)
                resolve(true);
            });
        },
        getDatos:({commit}) => {
            return new Promise((resolve) => {
                axios.get('/get_cart').then(function (response) {
                    resolve(response);
                    if(response.data?.success){
                        let datos = response.data.data.cart;
                        commit("cambiarCart", datos)
                    }
                });
            });
        }
    }
})