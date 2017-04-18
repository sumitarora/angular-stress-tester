import { Component, OnInit } from '@angular/core';
import { Service226Service } from '../../services/service-226.service';

@Component({
  selector: 'app-comp-226',
  templateUrl: './comp-226.component.html',
  styleUrls: ['./comp-226.component.css']
})
export class Comp226Component implements OnInit {

  constructor(private _service: Service226Service) { }

  ngOnInit() {
  }

}
