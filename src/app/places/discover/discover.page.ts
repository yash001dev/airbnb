import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../offers/place.model';
import {SegmentChangeEventDetail} from '@ionic/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces:Place[];
  listedLoadedPlaces:Place[];
  constructor(private placesService:PlacesService) { }

  ngOnInit() {
    this.loadedPlaces=this.placesService.places
    this.listedLoadedPlaces=this.loadedPlaces.slice(1);
  }
  onFilterUpdate(event:CustomEvent<SegmentChangeEventDetail>){
    console.log(event.detail);
  }

}
