import { Component, OnInit } from '@angular/core';
import { Service309Service } from '../../services/service-309.service';

@Component({
  selector: 'app-comp-309',
  templateUrl: './comp-309.component.html',
  styleUrls: ['./comp-309.component.css']
})
export class Comp309Component implements OnInit {

  constructor(private _service: Service309Service) { }

  ngOnInit() {
  }

}
