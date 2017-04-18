import { Component, OnInit } from '@angular/core';
import { Service788Service } from '../../services/service-788.service';

@Component({
  selector: 'app-comp-788',
  templateUrl: './comp-788.component.html',
  styleUrls: ['./comp-788.component.css']
})
export class Comp788Component implements OnInit {

  constructor(private _service: Service788Service) { }

  ngOnInit() {
  }

}
