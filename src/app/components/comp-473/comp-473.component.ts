import { Component, OnInit } from '@angular/core';
import { Service473Service } from '../../services/service-473.service';

@Component({
  selector: 'app-comp-473',
  templateUrl: './comp-473.component.html',
  styleUrls: ['./comp-473.component.css']
})
export class Comp473Component implements OnInit {

  constructor(private _service: Service473Service) { }

  ngOnInit() {
  }

}
