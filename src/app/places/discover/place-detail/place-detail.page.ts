import { CreateBookingComponent } from "./../../../bookings/create-booking/create-booking.component";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NavController, ModalController } from "@ionic/angular";
import { PlacesService } from "../../places.service";
import { Place } from "../../offers/place.model";
@Component({
  selector: "app-place-detail",
  templateUrl: "./place-detail.page.html",
  styleUrls: ["./place-detail.page.scss"],
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private placesService: PlacesService,
    private modelCtrl: ModalController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("placeId")) {
        this.navCtrl.navigateBack("/places/tabs/discover");
        return;
      }
      this.place = this.placesService.getPlaces(paramMap.get("placeId"));
    });
  }
  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover')
    // this.navCtrl.navigateBack('/places/tabs/discover');
    console.log("On Book Place Clicked...");
    this.modelCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place },
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData=>{
        console.log(resultData.data,resultData.role);
        if(resultData.role==='confirm'){
          console.log('BOOKED!');
        }
      });
  }
}
