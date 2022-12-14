import Vue from 'vue'
import Toasted from 'vue-toasted';

Vue.use(Toasted)

Vue.toasted.register('r_success',(payload) => {
  // if there is no message passed show default message
  if(! payload.message) {
      return ""
  }
  // if there is a message show it with the message
  return payload.message;
},{
  type : 'success',
  position: 'bottom-right',
  duration: 2000,
  keepOnHover: true,
  theme: 'outline',
  closeOnSwipe: true,
  action : [
    {
      text : 'X',
      onClick : (e, toastObject) => {
        toastObject.goAway(0);
      }
    },
  ]
})

Vue.toasted.register('r_error',(payload) => {
  // if there is no message passed show default message
  if(! payload.message) {
      return ""
  }
  // if there is a message show it with the message
  return payload.message;
},{
  type : 'error',
  position: 'bottom-right',
  duration: 2000,
  keepOnHover: true,
  theme: 'outline',
  closeOnSwipe: true,
  action : [
    {
      text : 'X',
      onClick : (e, toastObject) => {
        toastObject.goAway(0);
      }
    },
  ]
})