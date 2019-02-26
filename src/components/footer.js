import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer
    style={{
      background: `rebeccapurple`,
      marginTop: `1.45rem`,
    }}
    >
    © {new Date().getFullYear()}
    <span class="license"
      dangerouslySetInnerHTML={{
        __html: `<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons Lizenzvertrag" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />Dieses Werk von <a href="https://github.com/bioPunkKitchen/bioPunkKitchen.github.io/graphs/contributors" xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">bioPunk.kitchen-Entwicklern</a> ist lizenziert unter einer <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Namensnennung - Weitergabe unter gleichen Bedingungen 4.0 International Lizenz</a> und beruht auf dem Werk unter <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/bioPunkKitchen/bioPunkKitchen.github.io/" rel="dct:source">https://github.com/bioPunkKitchen/bioPunkKitchen.github.io/</a>.` }}
      />
  </footer>
)


export default Footer
