import { Component, OnInit, Input } from '@angular/core';
import * as L from 'leaflet';

const data = require('./routes.json')

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [19.438161988841706, -99.13372029289332],
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    data.routes.forEach((route: any) => {
      L.polyline([route], {color: "red"}).addTo(this.map);
    })
  }

  constructor() { 
    console.log("Data: ", data);
    
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

}
