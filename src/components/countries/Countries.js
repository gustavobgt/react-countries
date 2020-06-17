import React, { Component } from 'react';
import Country from './Country';

export default class Countries extends Component {
  render() {
    const { countries } = this.props;
    return (
      <div>
        <ul>
          {countries.map((country) => {
            const { id, name, flag, population } = country;
            return (
              <li key={id}>
                <Country country={country} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
