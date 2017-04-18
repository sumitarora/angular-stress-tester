import { Component, OnInit } from '@angular/core';
import { Service769Service } from '../../services/service-769.service';

@Component({
  selector: 'app-comp-769',
  templateUrl: './comp-769.component.html',
  styleUrls: ['./comp-769.component.css']
})
export class Comp769Component implements OnInit {

  constructor(private _service: Service769Service) { }

  ngOnInit() {
  }

}
