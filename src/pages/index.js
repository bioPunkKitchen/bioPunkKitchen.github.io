import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"
import Calendar from "../components/calendar"
import Newsletter from "../components/newsletter"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Bioökonomie`, `Biotechnologie`, `DIY`]} />
    <Newsletter />
    <Map />
    <Calendar />
    <div class="contact">
      Um mit uns in Kontakt zu treten, gibt es mehrere Wege.
      In der <a href="https://t.me/joinchat/EW_mnFTIFmguUpz0z7xfJA">Telegram-Gruppe</a> {` `}
      chatten wir miteinander.
      Im <a href="https://forum.wilap.de/c/kitchen">Forum</a> besprechen,
      planen und koordinieren wir Projekte in der bioPunk.kitchen und
      mit <a href="https://forum.wilap.de/">anderen Projekten</a> der {` `}
      <a href="https://machbar-potsdam.de">machBar Potsdam</a>.
      Du kannst der <a href="https://www.meetup.com/BiopunX/">Meetup-Gruppe</a>  {` `}
      beitreten, um über Veranstaltungen und Treffen auf dem Laufenden zu bleiben.
      Den <a href="javascript:showMailingPopUp()">Newsletter</a> kannst Du abbonieren,
      wenige Male im Jahr eine Übersicht über die Projekte der bioPunk.kitchen
      zu erhalten.
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
