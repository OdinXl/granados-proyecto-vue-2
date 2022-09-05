import Vue from 'vue'
//notificaciones
require("../notify.js");

export default function authenticated({ next, router }) {
  if (!window.localStorage.getItem('auth-granados') || !window.localStorage.getItem('user-granados')) {
    Vue.toasted.global.r_error({
      message : 'Debe estar logueado'
    });
    return router.push({ name: 'login' });
  }
  return next();
}