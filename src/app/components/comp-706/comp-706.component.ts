import { Component, OnInit } from '@angular/core';
import { Service706Service } from '../../services/service-706.service';

@Component({
  selector: 'app-comp-706',
  templateUrl: './comp-706.component.html',
  styleUrls: ['./comp-706.component.css']
})
export class Comp706Component implements OnInit {

  constructor(private _service: Service706Service) { }

  ngOnInit() {
  }

}
