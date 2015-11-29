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
  selectCategory (categoryId) {
    this.setState({
      activeCatId: categoryId
    })
  },
  itemStyle (index) {
    var style = {}
    for (var c in this.props.categories) {
      if (!(this.state.activeCatId === -1 || this.props.items[index].categories.indexOf(this.state.activeCatId) !== -1)) {
        style = {
          width: 0,
          height: 0
        }
      }
    }
    return style
  },
  render () {
    return (
      <div className='rport-container'>
        <div className='rport-categories'>
          <span
              className='rport-category'
              onClick={this.selectCategory.bind(this, -1)}
              key='-1' >
            All
          </span>
          {
            this.props.categories.map((category, index) => {
              return (
                  <span
                    className='rport-category'
                    onClick={this.selectCategory.bind(this, category.id)}
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
                  style={this.itemStyle(index)}
                  className='rport-item'
                  key={index}>
                  <img alt='' src={item.image} />
                  <p>
                    {item.text}
                  </p>
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
