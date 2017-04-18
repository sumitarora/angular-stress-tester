import { Component, OnInit } from '@angular/core';
import { Service983Service } from '../../services/service-983.service';

@Component({
  selector: 'app-comp-983',
  templateUrl: './comp-983.component.html',
  styleUrls: ['./comp-983.component.css']
})
export class Comp983Component implements OnInit {

  constructor(private _service: Service983Service) { }

  ngOnInit() {
  }

}
