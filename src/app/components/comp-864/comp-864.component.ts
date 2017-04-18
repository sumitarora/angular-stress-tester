import { Component, OnInit } from '@angular/core';
import { Service864Service } from '../../services/service-864.service';

@Component({
  selector: 'app-comp-864',
  templateUrl: './comp-864.component.html',
  styleUrls: ['./comp-864.component.css']
})
export class Comp864Component implements OnInit {

  constructor(private _service: Service864Service) { }

  ngOnInit() {
  }

}
