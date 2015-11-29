/**
 * Created by AntonioGiordano on 29/11/15.
 */

import React, {PropTypes} from 'react'

var ReactPortfolio = React.createClass({
  propTypes: {
    categories: PropTypes.array,
    items: PropTypes.array
  },
  getDefaultProps () {
    return {
      categories: [],
      items: []
    }
  },
  getInitialState () {
    return {
      activeCatId: -1
    }
  },
  showCategory (category) {
    this.setState({
      activeCatId: category.id
    })
  },
  isItemVisible (index) {
    return (
      (this.state.activeCatId === -1 || this.props.items[index].categoryId === this.state.activeCatId) ? null : 'none'
    )
  },
  render () {
    return (
      <div className='rport-container'>
        <div className='rport-categories'>
          <span
              className='rport-category'
              onClick={this.showCategory.bind(this, {id: -1})}
              key='-1' >
            All
          </span>
          {
            this.props.categories.map((category, index) => {
              return (
                  <span
                    className='rport-category'
                    onClick={this.showCategory.bind(this, category)}
                    key={category.id} >
                    {category.name}
                  </span>
              )
            }, this)
          }
        </div>
        <div className='rport-items'>
          {
            this.props.items.map((item, index) => {
              return (
                <div
                  style={{display: this.isItemVisible(index)}}
                  className='rport-item'
                  key={index}>
                  {item.text}
                </div>
              )
            }, this)
          }
        </div>
      </div>
    )
  }
})

export default ReactPortfolio
