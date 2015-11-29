/**
 * Created by AntonioGiordano on 21/11/15.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import ReactProductTour from 'react-product-tour'
import ReactPortfolio from './index.js'

var ReactPortfolioDemo = React.createClass({
  startTutorial () {
    this.refs['rport'].selectCategory(-1)
    this.refs['rpt'].startTour()
  },
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
        categories: ['cat1'],
        text: 'Item1',
        image: 'getapper.png'
      },
      {
        categories: ['cat1', 'cat2'],
        text: 'Item2'
      },
      {
        categories: ['cat1'],
        text: 'Item3'
      },
      {
        categories: ['cat2'],
        text: 'Item4'
      },
      {
        categories: ['cat1'],
        text: 'Item5'
      }
    ]
    var steps = [
      {
        selector: '.rport-categories',
        message: 'This is the categories list'
      },
      {
        selector: '.rport-category:last',
        message: 'By clicking on one category you will filter the items shown'
      },
      {
        selector: '.rport-items',
        message: 'This is the list updated',
        onChange: () => {
          this.refs['rport'].selectCategory('cat2')
        }
      }
    ]
    return (
      <div>
        <button onClick={this.startTutorial}>Tutorial</button>
        <ReactProductTour ref='rpt' steps={steps} />
        <ReactPortfolio ref='rport' categories={categories} items={items} />
      </div>
    )
  }
})

ReactDOM.render(<ReactPortfolioDemo />, document.getElementById('rport'))
