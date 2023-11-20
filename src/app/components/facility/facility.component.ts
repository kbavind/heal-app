import { Component, Input, OnInit } from '@angular/core';
import { LaunchNavigator } from '@awesome-cordova-plugins/launch-navigator/ngx';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss'],
})
export class FacilityComponent  implements OnInit {

  @Input() facility;

  constructor(
    private launch: LaunchNavigator
  ) { }

  ngOnInit() {}

  getCategories(data) {
    return data.join(', ')
  }

  OpenNavigator(Cd) { 
    this.launch.navigate(Cd.join(', ')).then((res)=>{
      alert(res);
    },(err)=>{
      alert(JSON.stringify(err));
    })
    console.log(Cd.join(', '))
  }

}
