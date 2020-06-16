import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/offers/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace:Place;
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}
  onCancel(){
    this.modalCtrl.dismiss(null,'cancel');
  }
  onBookPlace(){
    this.modalCtrl.dismiss({message:'This is a dummy message!'},'confirm');
  }
}
