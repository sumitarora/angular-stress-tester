import { Component, OnInit } from '@angular/core';
import { Service552Service } from '../../services/service-552.service';

@Component({
  selector: 'app-comp-552',
  templateUrl: './comp-552.component.html',
  styleUrls: ['./comp-552.component.css']
})
export class Comp552Component implements OnInit {

  constructor(private _service: Service552Service) { }

  ngOnInit() {
  }

}
