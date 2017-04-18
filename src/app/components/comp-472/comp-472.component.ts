import { Component, OnInit } from '@angular/core';
import { Service472Service } from '../../services/service-472.service';

@Component({
  selector: 'app-comp-472',
  templateUrl: './comp-472.component.html',
  styleUrls: ['./comp-472.component.css']
})
export class Comp472Component implements OnInit {

  constructor(private _service: Service472Service) { }

  ngOnInit() {
  }

}
