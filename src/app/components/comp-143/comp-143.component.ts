import { Component, OnInit } from '@angular/core';
import { Service143Service } from '../../services/service-143.service';

@Component({
  selector: 'app-comp-143',
  templateUrl: './comp-143.component.html',
  styleUrls: ['./comp-143.component.css']
})
export class Comp143Component implements OnInit {

  constructor(private _service: Service143Service) { }

  ngOnInit() {
  }

}
