var html = require('choo/html')

module.exports = view

function view (state, emit) {
  emit('DOMTitleChange', 'Try Dat is Down')

  return html`
    <body class="lh-copy sans-serif">
      <main class="pa4">
        <section class="measure-wide">
          <h1 class="f4 pt3 mt4">
            Hi There!
          </h1>
          <h2 class="f5 mb4 pb4 bb b--gray">
            We had to temporarily take Try Dat down.<br/>
            Someone was using it to mine Bitcoin. =(
          </h2>
          <p class="pt3">
            We were providing try-dat.com as a learning resource to the community. It was really nice way to get people working with Dat quickly.
          </p>
          <p>
            Unfortunately, someone decided to take advantage of our servers to mine Bitcoin. They were stealing the limited resources of a not-for-profit company for private gain.
          </p>
          <p>
            While this does make us really sad, we feel it also offers us a lesson in the dangers of tying public infrastructure to enclosed markets and virtual currencies. Thanks for your patience as we work to resolve this.
          </p>
          <p>
            You may be able to help us prevent this! To contribute to try-dat.com visit <a
            href="https://github.com/datproject">TODO: what repo</a>.
          </p>
        </section>
      </main>
    </body>
  `
}
