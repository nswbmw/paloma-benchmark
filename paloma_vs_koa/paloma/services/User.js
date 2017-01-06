'use strict'

app.service('User', function () {
  this.getName = function () {
    return Promise.resolve('Paloma')
  }
})