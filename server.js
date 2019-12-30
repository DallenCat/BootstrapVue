const Vue = require('vue')
const rend = require('vue-server-renderer')
const data_vue = {
  word:'hello world'
}
const data_tpl = {
  people : 'Hello people'
}
const app = new Vue({
  data:data_vue,
  template:'<div>{{word}}</div>'
})
const renderer = rend.createRenderer({
  template: `<!DOCTYPE html>
  <html lang="en">
    <head><title>hello world</title></head>
    <body>
      <!--vue-ssr-outlet--> <div>{{people}}</div>
    </body>
  </html>
  `
})
renderer.renderToString(app , data_tpl , (err, html) => {
  if(err){
    throw err;
  }
  console.log(html)
})