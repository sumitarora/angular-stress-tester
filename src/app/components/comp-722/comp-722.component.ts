import { Component, OnInit } from '@angular/core';
import { Service722Service } from '../../services/service-722.service';

@Component({
  selector: 'app-comp-722',
  templateUrl: './comp-722.component.html',
  styleUrls: ['./comp-722.component.css']
})
export class Comp722Component implements OnInit {

  constructor(private _service: Service722Service) { }

  ngOnInit() {
  }

}
