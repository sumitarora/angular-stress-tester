import { Component, OnInit } from '@angular/core';
import { Service551Service } from '../../services/service-551.service';

@Component({
  selector: 'app-comp-551',
  templateUrl: './comp-551.component.html',
  styleUrls: ['./comp-551.component.css']
})
export class Comp551Component implements OnInit {

  constructor(private _service: Service551Service) { }

  ngOnInit() {
  }

}
