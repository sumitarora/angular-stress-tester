import { Component, OnInit } from '@angular/core';
import { Service784Service } from '../../services/service-784.service';

@Component({
  selector: 'app-comp-784',
  templateUrl: './comp-784.component.html',
  styleUrls: ['./comp-784.component.css']
})
export class Comp784Component implements OnInit {

  constructor(private _service: Service784Service) { }

  ngOnInit() {
  }

}
