import { Component, OnInit } from '@angular/core';
import { Service670Service } from '../../services/service-670.service';

@Component({
  selector: 'app-comp-670',
  templateUrl: './comp-670.component.html',
  styleUrls: ['./comp-670.component.css']
})
export class Comp670Component implements OnInit {

  constructor(private _service: Service670Service) { }

  ngOnInit() {
  }

}
