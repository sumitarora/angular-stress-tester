import { Component, OnInit } from '@angular/core';
import { Service688Service } from '../../services/service-688.service';

@Component({
  selector: 'app-comp-688',
  templateUrl: './comp-688.component.html',
  styleUrls: ['./comp-688.component.css']
})
export class Comp688Component implements OnInit {

  constructor(private _service: Service688Service) { }

  ngOnInit() {
  }

}
