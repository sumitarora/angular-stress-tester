import { Component, OnInit } from '@angular/core';
import { Service520Service } from '../../services/service-520.service';

@Component({
  selector: 'app-comp-520',
  templateUrl: './comp-520.component.html',
  styleUrls: ['./comp-520.component.css']
})
export class Comp520Component implements OnInit {

  constructor(private _service: Service520Service) { }

  ngOnInit() {
  }

}
