import { Component, OnInit } from '@angular/core';
import { Service116Service } from '../../services/service-116.service';

@Component({
  selector: 'app-comp-116',
  templateUrl: './comp-116.component.html',
  styleUrls: ['./comp-116.component.css']
})
export class Comp116Component implements OnInit {

  constructor(private _service: Service116Service) { }

  ngOnInit() {
  }

}
