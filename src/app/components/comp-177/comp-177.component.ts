import { Component, OnInit } from '@angular/core';
import { Service177Service } from '../../services/service-177.service';

@Component({
  selector: 'app-comp-177',
  templateUrl: './comp-177.component.html',
  styleUrls: ['./comp-177.component.css']
})
export class Comp177Component implements OnInit {

  constructor(private _service: Service177Service) { }

  ngOnInit() {
  }

}
