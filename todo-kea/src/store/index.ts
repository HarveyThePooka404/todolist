import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { Task } from "@/types/Task"
import { db } from "@/store/firebase"

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    allToDos: [], 
  },

  getters: {
    getAllToDos: state => {
      return state.allToDos
    }
  },
  
  mutations: {
    // other mutations
    ...vuexfireMutations,
  },

  actions: {
    bindAllToDos: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef('allToDos', db.collection('tasks'))
    }),
    createToDo: firestoreAction((context, payload) => {
      return db.collection('tasks').add(payload);
    }),
    updateToDo: firestoreAction((context, payload) => {
      return db.collection('tasks')
        .doc(payload.id)
        .update({status: 'DONE'});
    }),
  },
})

export const mutations = { ...vuexfireMutations };
export default store;