import webpack from "webpack"
import WebpackDevServer from "webpack-dev-server"
import path from "path"
import config from "./config"

const location = {
  protocol: "http://",
  host: "0.0.0.0",
  port: 3004,
  open: true,
}

const serverUrl = `${ location.protocol }${ location.host }:${ location.port }`


const server = new WebpackDevServer(webpack(config), {
  contentBase: config.output.path,
  hot: true,
  stats: {
    colors: true,
    chunkModules: false,
    assets: true,
  },
  noInfo: true,
  historyApiFallback: true,
})

server.listen(
  location.port,
  location.host,
  () => {
    console.log(`open ${ serverUrl } in your browser`)
  }
)


export default config
