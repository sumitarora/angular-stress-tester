import { Component, OnInit } from '@angular/core';
import { Service208Service } from '../../services/service-208.service';

@Component({
  selector: 'app-comp-208',
  templateUrl: './comp-208.component.html',
  styleUrls: ['./comp-208.component.css']
})
export class Comp208Component implements OnInit {

  constructor(private _service: Service208Service) { }

  ngOnInit() {
  }

}
