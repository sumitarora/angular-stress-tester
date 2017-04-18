import { Component, OnInit } from '@angular/core';
import { Service17Service } from '../../services/service-17.service';

@Component({
  selector: 'app-comp-17',
  templateUrl: './comp-17.component.html',
  styleUrls: ['./comp-17.component.css']
})
export class Comp17Component implements OnInit {

  constructor(private _service: Service17Service) { }

  ngOnInit() {
  }

}
