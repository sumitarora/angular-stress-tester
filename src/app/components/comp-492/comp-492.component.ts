import { Component, OnInit } from '@angular/core';
import { Service492Service } from '../../services/service-492.service';

@Component({
  selector: 'app-comp-492',
  templateUrl: './comp-492.component.html',
  styleUrls: ['./comp-492.component.css']
})
export class Comp492Component implements OnInit {

  constructor(private _service: Service492Service) { }

  ngOnInit() {
  }

}
