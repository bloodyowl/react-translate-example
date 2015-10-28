import React from "react"
import { translate } from "react-translate"

const Title = ({ name, t }) => (
  <div style={styles.title}>
    {t("HELLO", { name: name })}
  </div>
)

const styles = {
  title: {
    fontSize: 30,
    textAlign: "center",
    paddingTop: 100,
    paddingBottom: 100,
  }
}

export default translate("Title")(Title)
