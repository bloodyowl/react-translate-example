import React from "react"
import { translate } from "react-translate"

const createOnChangeHandler = (available, onChange) => ({ currentTarget }) =>
  onChange(available[currentTarget.selectedIndex])

const TranslationsSwitch = ({ available, onChange, t }) => (
  <div style={styles.container}>
    <span style={styles.label}>
      {t("CHANGE_LANGUAGE")}
    </span>
    <select onChange={createOnChangeHandler(available, onChange)}>
      {available.map((item, index) =>
        <option key={index}>
          {item}
        </option>
      )}
    </select>
  </div>
)

const styles = {
  container: {
    background: "#333",
    color: "#fff",
    padding: 16,
    textAlign: "right",
    verticalAlign: "middle",
  },
  label: {
    paddingRight: 5,
    display: "inline-block",
  },
}

export default translate("TranslationsSwitch")(TranslationsSwitch)
