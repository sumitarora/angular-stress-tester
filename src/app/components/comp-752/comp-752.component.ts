import { Component, OnInit } from '@angular/core';
import { Service752Service } from '../../services/service-752.service';

@Component({
  selector: 'app-comp-752',
  templateUrl: './comp-752.component.html',
  styleUrls: ['./comp-752.component.css']
})
export class Comp752Component implements OnInit {

  constructor(private _service: Service752Service) { }

  ngOnInit() {
  }

}
