import { Component, OnInit } from '@angular/core';
import { Service535Service } from '../../services/service-535.service';

@Component({
  selector: 'app-comp-535',
  templateUrl: './comp-535.component.html',
  styleUrls: ['./comp-535.component.css']
})
export class Comp535Component implements OnInit {

  constructor(private _service: Service535Service) { }

  ngOnInit() {
  }

}
