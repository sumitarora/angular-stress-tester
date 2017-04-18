import { Component, OnInit } from '@angular/core';
import { Service867Service } from '../../services/service-867.service';

@Component({
  selector: 'app-comp-867',
  templateUrl: './comp-867.component.html',
  styleUrls: ['./comp-867.component.css']
})
export class Comp867Component implements OnInit {

  constructor(private _service: Service867Service) { }

  ngOnInit() {
  }

}
