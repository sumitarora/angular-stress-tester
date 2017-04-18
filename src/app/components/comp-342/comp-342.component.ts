import { Component, OnInit } from '@angular/core';
import { Service342Service } from '../../services/service-342.service';

@Component({
  selector: 'app-comp-342',
  templateUrl: './comp-342.component.html',
  styleUrls: ['./comp-342.component.css']
})
export class Comp342Component implements OnInit {

  constructor(private _service: Service342Service) { }

  ngOnInit() {
  }

}
