import { Component, OnInit } from '@angular/core';
import { Service7Service } from '../../services/service-7.service';

@Component({
  selector: 'app-comp-7',
  templateUrl: './comp-7.component.html',
  styleUrls: ['./comp-7.component.css']
})
export class Comp7Component implements OnInit {

  constructor(private _service: Service7Service) { }

  ngOnInit() {
  }

}
