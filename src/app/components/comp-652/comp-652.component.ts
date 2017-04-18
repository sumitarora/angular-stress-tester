import { Component, OnInit } from '@angular/core';
import { Service652Service } from '../../services/service-652.service';

@Component({
  selector: 'app-comp-652',
  templateUrl: './comp-652.component.html',
  styleUrls: ['./comp-652.component.css']
})
export class Comp652Component implements OnInit {

  constructor(private _service: Service652Service) { }

  ngOnInit() {
  }

}
