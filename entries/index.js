import "babel/polyfill"

import React, { Component } from "react"
import { render } from "react-dom"
import { TranslatorProvider } from "react-translate"
import available from "../i18n/available"

import Title from "Title"
import Counter from "Counter"
import TranslationsSwitch from "TranslationsSwitch"
import Field from "Field"

import "./index.html"

const language = (
  available.hasOwnProperty(navigator.language) ? navigator.language : "en-en"
)

const loadTranslations = (l) =>
  fetch(`/i18n/${ l }.json`)
    .then((res) => res.json())

class App extends Component {
  state = {
    translationsOverride: null,
    name: "",
  }
  async loadTranslations(lang) {
    const translationsOverride = await loadTranslations(lang)
    this.setState({ translationsOverride })
  }
  render() {
    const { translations } = this.props
    const { translationsOverride, name } = this.state
    return (
      <TranslatorProvider translations={translationsOverride || translations}>
        <div>
          <TranslationsSwitch
            onChange={(l) => this.loadTranslations(l)}
            available={Object.keys(available)}/>
          <Field
            value={name}
            onChange={({ target }) => this.setState({ name: target.value })}
          />
          <Title name={name}/>
          <Counter />
        </div>
      </TranslatorProvider>

    )
  }
}

loadTranslations(language)
  .then((translations) => {
    render(
      <App translations={translations} />,
      document.body.appendChild(document.createElement("div"))
    )
  })
  .catch(::console.error)
