import { Component, OnInit } from '@angular/core';
import { Service669Service } from '../../services/service-669.service';

@Component({
  selector: 'app-comp-669',
  templateUrl: './comp-669.component.html',
  styleUrls: ['./comp-669.component.css']
})
export class Comp669Component implements OnInit {

  constructor(private _service: Service669Service) { }

  ngOnInit() {
  }

}
