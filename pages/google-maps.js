import React from 'react';
import GoogleMap from '../components/gmap';

export default class SimplePage {


  getElements() {
    const initMapFunction = `function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}`;
    return <div>
      <script dangerouslySetInnerHTML={ {__html: initMapFunction }}></script>
      <GoogleMap/>
      </div>;
  }

  getMetaTags() {
    return [
      {charset: 'utf8'},
      {'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: 'hello world, powered by React Server'},
      {name: 'generator', content: 'React Server'},
    ];
  }
}
