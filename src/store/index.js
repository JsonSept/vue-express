import { createStore } from 'vuex'
import axios from 'axios'
const baseUrl = 'http://localhost:8081'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    // login({commit},loginDetails){
    //   axios.post(baseUrl+'/login',loginDetails)
    //   .then(res=> {
    //     // console.log(res);
    //     console.log(res.data);
    //   })
    // }                          
    
    async login({commit},loginDetails){
      let req = await axios.post(baseUrl+'/login',loginDetails)
      console.log(req.data);
    }
  },
  modules: {
  }
})
