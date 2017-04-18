import { Component, OnInit } from '@angular/core';
import { Service193Service } from '../../services/service-193.service';

@Component({
  selector: 'app-comp-193',
  templateUrl: './comp-193.component.html',
  styleUrls: ['./comp-193.component.css']
})
export class Comp193Component implements OnInit {

  constructor(private _service: Service193Service) { }

  ngOnInit() {
  }

}
