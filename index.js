var css = require('sheetify')
var choo = require('choo')

css('tachyons')
css('dat-colors')

css`
  body {

  }

  a {
    color: var(--color-green);
    text-decoration: none;
  }

  a:hover {
    color: var(--color-green-hover);
  }
`

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))

if (!module.parent) app.mount('body')
else module.exports = app
