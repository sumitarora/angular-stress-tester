import { Component, OnInit } from '@angular/core';
import { Service313Service } from '../../services/service-313.service';

@Component({
  selector: 'app-comp-313',
  templateUrl: './comp-313.component.html',
  styleUrls: ['./comp-313.component.css']
})
export class Comp313Component implements OnInit {

  constructor(private _service: Service313Service) { }

  ngOnInit() {
  }

}
