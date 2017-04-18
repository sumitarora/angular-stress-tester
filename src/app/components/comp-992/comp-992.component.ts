import { Component, OnInit } from '@angular/core';
import { Service992Service } from '../../services/service-992.service';

@Component({
  selector: 'app-comp-992',
  templateUrl: './comp-992.component.html',
  styleUrls: ['./comp-992.component.css']
})
export class Comp992Component implements OnInit {

  constructor(private _service: Service992Service) { }

  ngOnInit() {
  }

}
