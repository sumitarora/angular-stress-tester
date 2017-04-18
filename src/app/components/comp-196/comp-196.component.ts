import { Component, OnInit } from '@angular/core';
import { Service196Service } from '../../services/service-196.service';

@Component({
  selector: 'app-comp-196',
  templateUrl: './comp-196.component.html',
  styleUrls: ['./comp-196.component.css']
})
export class Comp196Component implements OnInit {

  constructor(private _service: Service196Service) { }

  ngOnInit() {
  }

}
