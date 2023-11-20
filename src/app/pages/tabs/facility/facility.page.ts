import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
// import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-facilitySearch',
  templateUrl: './facility.page.html',
  styleUrls: ['./facility.page.scss'],
})
export class FacilityPage implements OnInit {

  loc = 'Locating...';
  query: string;
  searchBtn: boolean;
  searchBar: boolean;
  types: any[] = [];
  allFacility: any[] = [];
  facilities: any[] = [];
  isLoading: boolean;
  item = {
    // icon: 'search-outline',
    image: 'assets/imgs/sad.png',
    color: 'primary',
    title: 'Sorry! No results found',
    // subtitle: 'No results found'
  };

  constructor(
    public popoverController: PopoverController,
    // private global: GlobalService
    ) { }

    ngOnInit() {
      this.types = [
        {id: 1, name: 'Clinic'},
        {id: 2, name: 'Hospital'},
        {id: 3, name: 'Pharmacy'},
        {id: 4, name: 'Public'},
        {id: 5, name: 'Private'},
        {id: 6, name: 'Show All'},
      ];
  
      this.allFacility = [
        { 
          id: 1, 
          name: 'Klinik Kotaraya Samarahan', 
          categories: ['Clinic', 'Private', 'Show All'], 
          location: 'Ground Floor Lot 11722, Sublot 2 , Aiman Mall Building, Jln Datuk Mohammad Musa, 94300 Kota Samarahan, Sarawak', 
          coordinate: [1.4562681059521512, 110.44767096459809]
        },
        { 
          id: 2, 
          name: 'Klinik Kesihatan Kota Sentosa', 
          categories: ['Clinic', 'Public', 'Show All'], 
          location: 'Jalan Stakan, Kota Sentosa, 93250 Kuching, Sarawak', 
          coordinate: [1.4643033291776288, 110.33368816459819]
        },
        { 
          id: 3, 
          name: 'Kuching Specialist Hospital',
          categories: ['Hospital', 'Private', 'Show All'], 
          location: 'Lot 10420, Block 11 Tabuan Stutong Commercial Centre Jalan Setia Raja Kuching Sarawak 93350 Malaysia, 2, Jalan Setia Raja, Taman Stutong Indah, 93350 Kuching, Sarawak', 
          coordinate: [1.5183246948460956, 110.37856041744604]
        },
        { 
          id: 4, 
          name: 'Borneo Medical Centre', 
          categories: ['Hospital', 'Private', 'Show All'], 
          location: 'Lot 10992, Section 64 KTLD, Jalan, Tun Jugah, 93350 Kuching, Sarawak', 
          coordinate: [1.5293608986876788, 110.35763396645122]
        },
        {
          id: 5, 
          name: 'Friska Pharmacy Kota Samarahan', 
          categories: ['Pharmacy', 'Private', 'Show All'], 
          location: 'GF, Sublot 7, Survey Lot No. 5931, Uni Square Commercial Centre Phase 2 Jalan Kuching-Kota Samarahan Expressway, 94300 Kota Samarahan, Sarawak', 
          coordinate: [1.469153312861019, 110.41622159380185]
        },
        {
          id: 6, 
          name: 'PMG Pharmacy Tabuan Tranquility', 
          categories: ['Pharmacy', 'Private', 'Show All'], 
          location: 'G/F OF LOT 16767, BLOCK 11, MUARA TEBAS LAND DISTRICT, Jalan Canna, 93350 Kuching, Sarawak', 
          coordinate: [1.518574983905397, 110.38635251400528]
        },
        {
          id: 7, 
          name: 'RELIANCE MEDICAL CLINIC KUCHING', 
          categories: ['Clinic', 'Private', 'Show All'], 
          location: 'NO. 505, GROUND FLOOR&FIRST FLOOR, LOT 4291, BLOCK 233 KNLD 7TH MILE, JALAN LIU SHAN BANG, OFF, Jalan Penrissen, 93250 Kuching, Sarawak', 
          coordinate: [1.4765166012478963, 110.33165146801183]
        },
        {
          id: 8, 
          name: 'Siburan Health Clinic', 
          categories: ['Clinic', 'Public', 'Show All'], 
          location: '94200 Siburan, Sarawak', 
          coordinate: [1.3609184922572808, 110.4047154799425]
        },
        {
          id: 9, 
          name: 'Normah Medical Specialist Centre', 
          categories: ['Hospital', 'Private', 'Show All'], 
          location: 'Lot 937, Section 30 KTLD, Jalan Tun Abdul Rahman Yaakub, Petra Jaya, 93050 Kuching, Sarawak', 
          coordinate: [1.5781711671147247, 110.32922647994297]
        },
        {
          id: 10, 
          name: 'Stungkor Health Clinic', 
          categories: ['Clinic', 'Public', 'Show All'], 
          location: 'Jln Kampung Bokah/Rasau/Stungkor, Kampung Stungkor Baru, 94500 Lundu, Sarawak', 
          coordinate: [1.480805403572517, 109.95596478179577]
        }
      ];
      // this.getCurrentLocation();
    }

  updateSearch(query?: string) {
    if(query) this.query = query;
    this.searchBar = true;
    // get facility data
    this.isLoading = true;
    setTimeout(() => {
      this.facilities = this.allFacility.filter(x => {
        return (x.name).toLowerCase().includes(this.query.toLocaleLowerCase())
        || x.categories.find(z => z.toLowerCase().includes(this.query.toLowerCase()));
      });
      console.log('update facility data: ', this.facilities);
      this.isLoading = false;
    }, 3000);
  }

  onInputQuery() {
    console.log('input query: ', this.query);
    if(this.query.length > 0) {
      this.searchBtn = true;
    } else {
      this.searchBtn = false;
    }
  }

  toggleSearch(val?) {
    if(val) {
      this.query = '';
      this.onInputQuery();
    }
    this.searchBar = !this.searchBar;
  }
  
}
