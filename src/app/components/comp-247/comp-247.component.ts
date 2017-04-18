import { Component, OnInit } from '@angular/core';
import { Service247Service } from '../../services/service-247.service';

@Component({
  selector: 'app-comp-247',
  templateUrl: './comp-247.component.html',
  styleUrls: ['./comp-247.component.css']
})
export class Comp247Component implements OnInit {

  constructor(private _service: Service247Service) { }

  ngOnInit() {
  }

}
