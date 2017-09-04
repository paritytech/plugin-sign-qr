// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import PropTypes from 'prop-types';

injectTapEventPlugin();

export default class Request extends Component {
  // static propTypes = {
  //   id: PropTypes.object.isRequired,
  //   onConfirm: PropTypes.func.isRequired,
  //   onReject: PropTypes.func.isRequired,
  //   payload: PropTypes.oneOfType([
  //     PropTypes.shape({ decrypt: PropTypes.object.isRequired }),
  //     PropTypes.shape({ sendTransaction: PropTypes.object.isRequired }),
  //     PropTypes.shape({ sign: PropTypes.object.isRequired }),
  //     PropTypes.shape({ signTransaction: PropTypes.object.isRequired })
  //   ]).isRequired
  // };

  static isHandler (payload) {
    return true;
  }

  render () {
    return (
      <div>Hello from a signer plugin</div>
    );
  }
}
