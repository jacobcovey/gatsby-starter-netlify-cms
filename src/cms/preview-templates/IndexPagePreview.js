import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        hero1Form={data.hero1Form || {}}
        contentStats1={data.contentStats1 || {}}
        contentPhoto1={data.contentPhoto1 || {}}
        contentIcons1={data.contentIcons1 || {}}
        testi1Slider={data.testi1Slider || {}}
        faq1Accordian={data.faq1Accordian || {}}
        contentSteps1={data.contentSteps1 || {}}
        cta1basic={data.cta1basic || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
