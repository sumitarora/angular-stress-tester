import { Component, OnInit } from '@angular/core';
import { Service139Service } from '../../services/service-139.service';

@Component({
  selector: 'app-comp-139',
  templateUrl: './comp-139.component.html',
  styleUrls: ['./comp-139.component.css']
})
export class Comp139Component implements OnInit {

  constructor(private _service: Service139Service) { }

  ngOnInit() {
  }

}
