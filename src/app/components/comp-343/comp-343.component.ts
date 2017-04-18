import { Component, OnInit } from '@angular/core';
import { Service343Service } from '../../services/service-343.service';

@Component({
  selector: 'app-comp-343',
  templateUrl: './comp-343.component.html',
  styleUrls: ['./comp-343.component.css']
})
export class Comp343Component implements OnInit {

  constructor(private _service: Service343Service) { }

  ngOnInit() {
  }

}
