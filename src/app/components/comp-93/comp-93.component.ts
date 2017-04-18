import { Component, OnInit } from '@angular/core';
import { Service93Service } from '../../services/service-93.service';

@Component({
  selector: 'app-comp-93',
  templateUrl: './comp-93.component.html',
  styleUrls: ['./comp-93.component.css']
})
export class Comp93Component implements OnInit {

  constructor(private _service: Service93Service) { }

  ngOnInit() {
  }

}
