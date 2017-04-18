import { Component, OnInit } from '@angular/core';
import { Service588Service } from '../../services/service-588.service';

@Component({
  selector: 'app-comp-588',
  templateUrl: './comp-588.component.html',
  styleUrls: ['./comp-588.component.css']
})
export class Comp588Component implements OnInit {

  constructor(private _service: Service588Service) { }

  ngOnInit() {
  }

}
