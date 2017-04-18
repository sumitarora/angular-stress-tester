import { Component, OnInit } from '@angular/core';
import { Service951Service } from '../../services/service-951.service';

@Component({
  selector: 'app-comp-951',
  templateUrl: './comp-951.component.html',
  styleUrls: ['./comp-951.component.css']
})
export class Comp951Component implements OnInit {

  constructor(private _service: Service951Service) { }

  ngOnInit() {
  }

}
