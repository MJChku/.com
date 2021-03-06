import React from 'react'
import { graphql } from 'gatsby'
import { Wrapper, Content, ContentBottom } from '../components/Utils'

import Hero from '../components/Hero'
import Form from '../components/contactForm'
import SEO from '../components/SEO'
import Arrow from '../components/Arrow'

const Contact = ({ data, location }) => {
  const contact = data.contentfulAbout
  return (
    <>
      <SEO title="CONTACT" image={contact.shareImage} />
      <Wrapper>
        <Content>
          <section id="top">
            <Hero image={contact.heroImage} />
            <Arrow anchor={location.pathname + '#bottom'} />
          </section>
        </Content>
        <ContentBottom className="about">
          <section id="bottom">
            <article
              dangerouslySetInnerHTML={{
                __html: contact.body.childMarkdownRemark.html,
              }}
            />

            <Form />
          </section>
        </ContentBottom>
      </Wrapper>
    </>
  )
}

export const query = graphql`
  query {
    contentfulAbout {
      title
      headline
      id
      heroImage {
        title
        fluid(maxWidth: 1600, quality: 50) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      shareImage {
        ogimg: resize(width: 1200, quality: 50) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default Contact
