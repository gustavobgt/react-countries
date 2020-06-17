import React, { Component } from 'react';

export default class Header extends Component {
  handleInputChange = (event) => {
    const { onChangeFilter } = this.props;
    const newText = event.target.value;
    onChangeFilter(newText);
  };

  render() {
    const { filter, countryCount, totalPopulation } = this.props;
    return (
      <div>
        <input type="text" value={filter} onChange={this.handleInputChange} /> |{' '}
        <span>Países: {countryCount} </span> |{' '}
        <span>População: {totalPopulation} </span> |
      </div>
    );
  }
}
