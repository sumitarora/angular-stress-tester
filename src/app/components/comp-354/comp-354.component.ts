import { Component, OnInit } from '@angular/core';
import { Service354Service } from '../../services/service-354.service';

@Component({
  selector: 'app-comp-354',
  templateUrl: './comp-354.component.html',
  styleUrls: ['./comp-354.component.css']
})
export class Comp354Component implements OnInit {

  constructor(private _service: Service354Service) { }

  ngOnInit() {
  }

}
