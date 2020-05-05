import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  hero1Form,
  contentStats1,
  contentPhoto1,
  contentIcons1,
  testi1Slider,
  faq1Accordian,
  contentSteps1,
  cta1basic,
}) => (
  <div>
    <h1>{hero1Form.heading}</h1>
    {/* <h1>Pre Test</h1> */}
  </div>
)

IndexPageTemplate.propTypes = {
  hero1Form: PropTypes.object,
  contentStats1: PropTypes.object,
  contentPhoto1: PropTypes.object,
  contentIcons1: PropTypes.object,
  testi1Slider: PropTypes.object,
  faq1Accordian: PropTypes.object,
  contentSteps1: PropTypes.object,
  cta1basic: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        hero1Form={frontmatter.hero1Form}
        contentStats1={frontmatter.contentStats1}
        contentPhoto1={frontmatter.contentPhoto1}
        contentIcons1={frontmatter.contentIcons1}
        testi1Slider={frontmatter.testi1Slider}
        faq1Accordian={frontmatter.faq1Accordian}
        contentSteps1={frontmatter.contentSteps1}
        cta1basic={frontmatter.cta1basic}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        hero1Form {
          heading
          subheading
          asFeaturedIn {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        contentStats1 {
          title
          subtitle
          settlementExamples {
            settlementDollarAmount
            settlementDescription
          }
        }
        contentPhoto1 {
          title
          subtitle
          description
          photo {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          checklist {
            itemText
          }
        }
        contentIcons1 {
          title
          iconList {
            icon {
              childImageSharp {
                fluid(maxWidth: 200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            itemText
          }
        }
        testi1Slider {
          slider {
            testiText
            clientName
            caseType
          }
        }
        faq1Accordian {
          title
          subtitle
          accordian {
            question
            answer
          }
        }
        contentSteps1 {
          title
          subtitle
          contentSteps {
            stepIcon {
              childImageSharp {
                fluid(maxWidth: 200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            stepTitle
            stepDescription
          }
        }
        cta1basic {
          largeTitle
          subtitleBold
          subtitleLight
          buttonText
        }
      }
    }
  }
`
