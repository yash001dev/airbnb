import { Booking } from './booking.model';
import { BookingService } from './booking.service';
import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBooking:Booking[];
  listedLoadedPlaces:Booking[];
  constructor(private bookingService:BookingService) { }

  ngOnInit() {
    this.loadedBooking=this.bookingService.bookings;
    this.listedLoadedPlaces=this.listedLoadedPlaces.slice(1);
  }
  onCancelBooking(offerId:string,slidingEl:IonItemSliding){
    slidingEl.close();

  }

}
