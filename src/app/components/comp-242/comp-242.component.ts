import { Component, OnInit } from '@angular/core';
import { Service242Service } from '../../services/service-242.service';

@Component({
  selector: 'app-comp-242',
  templateUrl: './comp-242.component.html',
  styleUrls: ['./comp-242.component.css']
})
export class Comp242Component implements OnInit {

  constructor(private _service: Service242Service) { }

  ngOnInit() {
  }

}
