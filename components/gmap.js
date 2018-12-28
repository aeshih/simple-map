import React from 'react';
import {logging} from 'react-server';
import './gmap.css';

const logger = logging.getLogger(__LOGGER__);

export default class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>My Google Maps Demo</h3>
        <div id="map"></div>
        <script async defer
        src="https://maps.googleapis.com/maps/api/js?client=gme-redfin&channel=search&v=3.35&use_slippy=false&libraries=geometry,drawing&callback=initMap">
        </script>
      </div>
    );
  }
}
