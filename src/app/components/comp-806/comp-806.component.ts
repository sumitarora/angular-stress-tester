import { Component, OnInit } from '@angular/core';
import { Service806Service } from '../../services/service-806.service';

@Component({
  selector: 'app-comp-806',
  templateUrl: './comp-806.component.html',
  styleUrls: ['./comp-806.component.css']
})
export class Comp806Component implements OnInit {

  constructor(private _service: Service806Service) { }

  ngOnInit() {
  }

}
