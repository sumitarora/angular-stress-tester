import { Component, OnInit } from '@angular/core';
import { Service981Service } from '../../services/service-981.service';

@Component({
  selector: 'app-comp-981',
  templateUrl: './comp-981.component.html',
  styleUrls: ['./comp-981.component.css']
})
export class Comp981Component implements OnInit {

  constructor(private _service: Service981Service) { }

  ngOnInit() {
  }

}
