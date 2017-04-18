import { Component, OnInit } from '@angular/core';
import { Service645Service } from '../../services/service-645.service';

@Component({
  selector: 'app-comp-645',
  templateUrl: './comp-645.component.html',
  styleUrls: ['./comp-645.component.css']
})
export class Comp645Component implements OnInit {

  constructor(private _service: Service645Service) { }

  ngOnInit() {
  }

}
