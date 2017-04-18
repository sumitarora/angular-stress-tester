import { Component, OnInit } from '@angular/core';
import { Service681Service } from '../../services/service-681.service';

@Component({
  selector: 'app-comp-681',
  templateUrl: './comp-681.component.html',
  styleUrls: ['./comp-681.component.css']
})
export class Comp681Component implements OnInit {

  constructor(private _service: Service681Service) { }

  ngOnInit() {
  }

}
