import { Component, OnInit } from '@angular/core';
import { Service728Service } from '../../services/service-728.service';

@Component({
  selector: 'app-comp-728',
  templateUrl: './comp-728.component.html',
  styleUrls: ['./comp-728.component.css']
})
export class Comp728Component implements OnInit {

  constructor(private _service: Service728Service) { }

  ngOnInit() {
  }

}
