import { Component, OnInit } from '@angular/core';
import { Service351Service } from '../../services/service-351.service';

@Component({
  selector: 'app-comp-351',
  templateUrl: './comp-351.component.html',
  styleUrls: ['./comp-351.component.css']
})
export class Comp351Component implements OnInit {

  constructor(private _service: Service351Service) { }

  ngOnInit() {
  }

}
