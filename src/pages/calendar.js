import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ContentGrid } from "../components/styles/contentGrid"

const Calendar = () => (
  <Layout>
    <SEO title="Calendar" />
    <ContentGrid>
      <h1>Calendar</h1>
      <h3>Below are all upcoming events:</h3>
    </ContentGrid>
  </Layout>
)

export default Calendar
