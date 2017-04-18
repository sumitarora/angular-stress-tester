import { Component, OnInit } from '@angular/core';
import { Service919Service } from '../../services/service-919.service';

@Component({
  selector: 'app-comp-919',
  templateUrl: './comp-919.component.html',
  styleUrls: ['./comp-919.component.css']
})
export class Comp919Component implements OnInit {

  constructor(private _service: Service919Service) { }

  ngOnInit() {
  }

}
