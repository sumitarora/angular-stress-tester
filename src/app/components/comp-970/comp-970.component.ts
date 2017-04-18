import { Component, OnInit } from '@angular/core';
import { Service970Service } from '../../services/service-970.service';

@Component({
  selector: 'app-comp-970',
  templateUrl: './comp-970.component.html',
  styleUrls: ['./comp-970.component.css']
})
export class Comp970Component implements OnInit {

  constructor(private _service: Service970Service) { }

  ngOnInit() {
  }

}
