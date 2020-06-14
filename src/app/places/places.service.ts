import { Injectable } from '@angular/core';
import { Place } from './offers/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places:Place[]=[
    new Place('p1','Dubai Mansion','Heart of UAE','https://cdn.pixabay.com/photo/2019/05/09/19/49/travel-4191991_960_720.jpg',200.49),
    new Place('p2','Taj Palace','Heart Of India','https://cdn.pixabay.com/photo/2018/08/08/13/34/taj-mahal-palace-hotel-3592184_960_720.jpg',350.56),
    new Place('p3','New York','Main Place Of US IT Industry','https://cdn.pixabay.com/photo/2015/04/20/13/44/sports-731506_960_720.jpg',150.45),
    
  ];

  get places(){
    return [...this._places];
  }

  constructor() { }
}
