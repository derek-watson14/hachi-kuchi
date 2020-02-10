import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ContentGrid } from "../components/styles/contentGrid"

const Teach = () => (
  <Layout>
    <SEO title="Teach" />
    <ContentGrid>
      <h1>Teach</h1>
      <h3>Do you have an artisitic talent you would like to share?</h3>
      <p>Come to an event and teach others!</p>
      <p>
        Fill out the form below and we can arrage a booth to be set up for you.
      </p>
      <p>
        <a
          href="https://docs.google.com/forms/d/17UblC8V_ho3i9FqBPV5TcYAD0PN0XaSUHlgP15V6u0U/edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Booth Sign Up
        </a>
      </p>
    </ContentGrid>
  </Layout>
)

export default Teach
