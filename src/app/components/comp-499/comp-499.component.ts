import { Component, OnInit } from '@angular/core';
import { Service499Service } from '../../services/service-499.service';

@Component({
  selector: 'app-comp-499',
  templateUrl: './comp-499.component.html',
  styleUrls: ['./comp-499.component.css']
})
export class Comp499Component implements OnInit {

  constructor(private _service: Service499Service) { }

  ngOnInit() {
  }

}
