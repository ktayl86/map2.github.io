let myMap = L.map('map2').setView([32.18, -99.14], 4)
let basemapUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
L.tileLayer(basemapUrl).addTo(myMap)
L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
  layers: 'nexrad-n0r-900913',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA, Iowa State University'
}).addTo(myMap)
L.tileLayer.wms('https://mesonet.agron.iastate.edu/cgi-bin/wms/us/wwa.cgi', {
  layers: 'warnings_c',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA, Iowa State University'
}).addTo(myMap)
