import './index.css';
import L from 'leaflet';

const map = L.map('map').setView([30, 0], 3);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png', {
  maxZoom: 18
}).addTo(map);
