import { Component, OnInit } from '@angular/core';
import { Service438Service } from '../../services/service-438.service';

@Component({
  selector: 'app-comp-438',
  templateUrl: './comp-438.component.html',
  styleUrls: ['./comp-438.component.css']
})
export class Comp438Component implements OnInit {

  constructor(private _service: Service438Service) { }

  ngOnInit() {
  }

}
