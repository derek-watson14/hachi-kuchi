import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ContentGrid, Wrapper } from "../components/styles/contentGrid"

const Attend = props => {
  const modalOpen = props.location.state.modalOpen
  return (
    <Layout modalOpen={modalOpen}>
      <SEO title="Attend" />
      <ContentGrid>
        <Wrapper>
          <h1>Attend</h1>
          <h3>Would you like to meet local artists and learn new talents?</h3>
          <p>Come and participate in one of our events!</p>
          <p>Fill out the form below so we know when to expect you.</p>
          <p>
            <a
              href="https://docs.google.com/forms/d/1Cz0MmL2zYLuEwW6LwWCLyB1JR5YkBVw531JS3en3NUw/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Session Sign Up
            </a>
          </p>
        </Wrapper>
      </ContentGrid>
    </Layout>
  )
}

export default Attend
