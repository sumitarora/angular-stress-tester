import { Component, OnInit } from '@angular/core';
import { Service528Service } from '../../services/service-528.service';

@Component({
  selector: 'app-comp-528',
  templateUrl: './comp-528.component.html',
  styleUrls: ['./comp-528.component.css']
})
export class Comp528Component implements OnInit {

  constructor(private _service: Service528Service) { }

  ngOnInit() {
  }

}
