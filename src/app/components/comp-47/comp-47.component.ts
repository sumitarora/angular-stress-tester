import { Component, OnInit } from '@angular/core';
import { Service47Service } from '../../services/service-47.service';

@Component({
  selector: 'app-comp-47',
  templateUrl: './comp-47.component.html',
  styleUrls: ['./comp-47.component.css']
})
export class Comp47Component implements OnInit {

  constructor(private _service: Service47Service) { }

  ngOnInit() {
  }

}
