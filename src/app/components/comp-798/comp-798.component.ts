import { Component, OnInit } from '@angular/core';
import { Service798Service } from '../../services/service-798.service';

@Component({
  selector: 'app-comp-798',
  templateUrl: './comp-798.component.html',
  styleUrls: ['./comp-798.component.css']
})
export class Comp798Component implements OnInit {

  constructor(private _service: Service798Service) { }

  ngOnInit() {
  }

}
