import { Component, OnInit } from '@angular/core';
import { Service751Service } from '../../services/service-751.service';

@Component({
  selector: 'app-comp-751',
  templateUrl: './comp-751.component.html',
  styleUrls: ['./comp-751.component.css']
})
export class Comp751Component implements OnInit {

  constructor(private _service: Service751Service) { }

  ngOnInit() {
  }

}
