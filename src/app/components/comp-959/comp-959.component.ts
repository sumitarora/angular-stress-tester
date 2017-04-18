import { Component, OnInit } from '@angular/core';
import { Service959Service } from '../../services/service-959.service';

@Component({
  selector: 'app-comp-959',
  templateUrl: './comp-959.component.html',
  styleUrls: ['./comp-959.component.css']
})
export class Comp959Component implements OnInit {

  constructor(private _service: Service959Service) { }

  ngOnInit() {
  }

}
