import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bokkings',
  templateUrl: './offer-bokkings.page.html',
  styleUrls: ['./offer-bokkings.page.scss'],
})
export class OfferBokkingsPage implements OnInit {
  place:Place;
  constructor(private route:ActivatedRoute,private navCtrl:NavController,private placesService:PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
       this.place=this.placesService.getPlaces(paramMap.get('placeId'))
    }); 
  }

}
