import { Component, OnInit } from '@angular/core';
import { Service938Service } from '../../services/service-938.service';

@Component({
  selector: 'app-comp-938',
  templateUrl: './comp-938.component.html',
  styleUrls: ['./comp-938.component.css']
})
export class Comp938Component implements OnInit {

  constructor(private _service: Service938Service) { }

  ngOnInit() {
  }

}
