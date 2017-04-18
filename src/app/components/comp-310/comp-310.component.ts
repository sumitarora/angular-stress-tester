import { Component, OnInit } from '@angular/core';
import { Service310Service } from '../../services/service-310.service';

@Component({
  selector: 'app-comp-310',
  templateUrl: './comp-310.component.html',
  styleUrls: ['./comp-310.component.css']
})
export class Comp310Component implements OnInit {

  constructor(private _service: Service310Service) { }

  ngOnInit() {
  }

}
