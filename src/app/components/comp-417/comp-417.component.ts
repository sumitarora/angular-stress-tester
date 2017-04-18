import { Component, OnInit } from '@angular/core';
import { Service417Service } from '../../services/service-417.service';

@Component({
  selector: 'app-comp-417',
  templateUrl: './comp-417.component.html',
  styleUrls: ['./comp-417.component.css']
})
export class Comp417Component implements OnInit {

  constructor(private _service: Service417Service) { }

  ngOnInit() {
  }

}
