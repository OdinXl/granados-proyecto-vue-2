import Vue from 'vue'
//filtros

Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('decimal', function (value) {
    if (!value) return 0
    return parseFloat(value).toFixed(2)
})