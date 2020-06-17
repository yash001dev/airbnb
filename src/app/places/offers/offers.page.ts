import { Component, OnInit } from '@angular/core';
import { Place } from './place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offerPlaces:Place[]=[];
  constructor(private offerService:PlacesService) { }

  ngOnInit() {
    this.offerPlaces=this.offerService.places;
  }
  onEdit(offerId:string){
    console.log('Editing Item',offerId);
  }
}
