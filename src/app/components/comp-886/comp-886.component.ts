import { Component, OnInit } from '@angular/core';
import { Service886Service } from '../../services/service-886.service';

@Component({
  selector: 'app-comp-886',
  templateUrl: './comp-886.component.html',
  styleUrls: ['./comp-886.component.css']
})
export class Comp886Component implements OnInit {

  constructor(private _service: Service886Service) { }

  ngOnInit() {
  }

}
