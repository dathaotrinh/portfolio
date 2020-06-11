import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects = [
    {
      name: 'OverCDs',
      detail: [],
    },
    {
      name: 'Hotel Booking System',
      detail: [
        {
          image1:
            'https://github.com/jtrinh21/HotelBookingSystem/raw/master/src/Image/hotelBookingSystem.gif',
          image2: 'https://github.com/jtrinh21/HotelBookingSystem/raw/master/build/classes/Image/SetupXampp.gif',
          image3: 'https://github.com/jtrinh21/HotelBookingSystem/raw/master/build/classes/Image/SetUpJDBC.gif',
          image4 :'https://github.com/jtrinh21/HotelBookingSystem/raw/master/src/Image/TakeAPic.gif',
          image5: 'https://github.com/jtrinh21/HotelBookingSystem/raw/master/src/Image/LoginFeature.gif',
          image6: 'https://github.com/jtrinh21/HotelBookingSystem/raw/master/src/Image/DoubleBooked.gif',
          image7: 'https://github.com/jtrinh21/HotelBookingSystem/raw/master/src/Image/DoubleBookedOldRSAndDelete.gif',
          image8: 'https://github.com/jtrinh21/HotelBookingSystem/raw/master/src/Image/PreviousNext.gif'
        },
      ],
    },
    {
      name: 'Facebulous',
      detail: [
        {
          image1:
            'https://github.com/jtrinh21/FACEBULOUS/blob/master/src/images/Screenshot%20(2).png',
          image2:
            'https://github.com/jtrinh21/HotelBookingSystem/raw/master/build/classes/Image/SetupXampp.gif',
          image3:
            'https://github.com/jtrinh21/FACEBULOUS/raw/master/gif/FaceCapture.png',
          image4:
            'https://github.com/jtrinh21/FACEBULOUS/raw/master/gif/FaceRegconize.png',
          image5:
            'https://github.com/jtrinh21/FACEBULOUS/raw/master/gif/Data.png',
        },
      ],
    },
    {
      name: 'Map the USA',
      detail: '',
    },
  ];
  constructor() {}
}
