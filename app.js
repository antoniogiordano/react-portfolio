/**
 * Created by AntonioGiordano on 21/11/15.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import ReactPortfolio from './index.js'

var ReactPortfolioDemo = React.createClass({
  render () {
    var categories = [
      {
        id: 'cat1',
        'name': 'Category1'
      },
      {
        id: 'cat2',
        'name': 'Category2'
      }
    ]
    var items = [
      {
        categoryId: 'cat1',
        text: 'Item1'
      },
      {
        categoryId: 'cat2',
        text: 'Item2'
      },
      {
        categoryId: 'cat1',
        text: 'Item3'
      },
      {
        categoryId: 'cat1',
        text: 'Item4'
      }
    ]
    return (
      <div>
        <ReactPortfolio categories={categories} items={items} />
      </div>
    )
  }
})

ReactDOM.render(<ReactPortfolioDemo />, document.getElementById('rport'))
