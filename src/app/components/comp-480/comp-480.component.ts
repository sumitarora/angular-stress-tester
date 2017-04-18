import { Component, OnInit } from '@angular/core';
import { Service480Service } from '../../services/service-480.service';

@Component({
  selector: 'app-comp-480',
  templateUrl: './comp-480.component.html',
  styleUrls: ['./comp-480.component.css']
})
export class Comp480Component implements OnInit {

  constructor(private _service: Service480Service) { }

  ngOnInit() {
  }

}
