import { Component, OnInit } from '@angular/core';
import { Service795Service } from '../../services/service-795.service';

@Component({
  selector: 'app-comp-795',
  templateUrl: './comp-795.component.html',
  styleUrls: ['./comp-795.component.css']
})
export class Comp795Component implements OnInit {

  constructor(private _service: Service795Service) { }

  ngOnInit() {
  }

}
