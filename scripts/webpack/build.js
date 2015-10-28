import webpack from "webpack"
import config from "./config"

webpack(config, (err, stats) => {
  if(err) {
    throw error
  }
  console.log(stats.toString())
})
