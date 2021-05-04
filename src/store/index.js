import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    forms: []
  },
  mutations: {
    //set the posts array with the data that we get from the api using the action getPosts()
    SET_FORMS(state, forms) {
      state.forms = forms
    }
  },
  actions: {
  //fetch data from strapi and set the forms array with the data by commiting the SET_FORMS() mutation
    fetchForms({commit}) {
      // GET request using fetch with error handling
      fetch('http://localhost:8000/Formularios')
      .then(async response => {
        const data = await response.json();
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        commit('SET_FORMS', data)
      })
      .catch(error => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
    }
    
  },
  modules: {
  }
})
