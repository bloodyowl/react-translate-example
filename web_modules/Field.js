import React from "react"
import { translate } from "react-translate"

const Field = ({ value, onChange, t }) => (
  <input
    style={styles.field}
    value={value}
    onChange={onChange}
    placeholder={t("ENTER_NAME")} />
)

const styles = {
  field: {
    fontSize: 32,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ccc",
    margin: "0 auto",
    display: "block",
    marginTop: 16,
  },
}

export default translate("Field")(Field)
