import { Component, OnInit } from '@angular/core';
import { Service100Service } from '../../services/service-100.service';

@Component({
  selector: 'app-comp-100',
  templateUrl: './comp-100.component.html',
  styleUrls: ['./comp-100.component.css']
})
export class Comp100Component implements OnInit {

  constructor(private _service: Service100Service) { }

  ngOnInit() {
  }

}
