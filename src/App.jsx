import React from 'react'
import css from './App.module.css'

export const App = () => {
  return (
    <>
      <div className={css.adds}>

        <a className={css.title} target="_blank" href="https://www.htmlcssbuttongenerator.com/">
          <div className={css.title__text}>
            <span className={css.css_tools}>CSS tools</span>
            <br />
            <span className={css.click}>Жми сюда!</span>
          </div>
        </a>

        <div className={css.add}>
          <h1 className={css.glitch}>
            Elcho
          </h1>
        </div>

      </div>
    </>
  )
}
