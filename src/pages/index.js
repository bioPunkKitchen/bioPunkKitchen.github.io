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
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
