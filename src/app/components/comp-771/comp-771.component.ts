import { Component, OnInit } from '@angular/core';
import { Service771Service } from '../../services/service-771.service';

@Component({
  selector: 'app-comp-771',
  templateUrl: './comp-771.component.html',
  styleUrls: ['./comp-771.component.css']
})
export class Comp771Component implements OnInit {

  constructor(private _service: Service771Service) { }

  ngOnInit() {
  }

}
