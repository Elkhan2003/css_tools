import React from 'react'
import css from './App.module.css'

export const App = () => {
  return (
    <>
      <div className={css.adds}>

        <a className={css.title} target="_blank" href="https://www.htmlcssbuttongenerator.com/">
          <div className={css.title__text}>
            CSS tools
            <br />
            Жми сюда!
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
