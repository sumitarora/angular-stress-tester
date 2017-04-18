import { Component, OnInit } from '@angular/core';
import { Service255Service } from '../../services/service-255.service';

@Component({
  selector: 'app-comp-255',
  templateUrl: './comp-255.component.html',
  styleUrls: ['./comp-255.component.css']
})
export class Comp255Component implements OnInit {

  constructor(private _service: Service255Service) { }

  ngOnInit() {
  }

}
