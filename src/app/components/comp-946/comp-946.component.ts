import { Component, OnInit } from '@angular/core';
import { Service946Service } from '../../services/service-946.service';

@Component({
  selector: 'app-comp-946',
  templateUrl: './comp-946.component.html',
  styleUrls: ['./comp-946.component.css']
})
export class Comp946Component implements OnInit {

  constructor(private _service: Service946Service) { }

  ngOnInit() {
  }

}
