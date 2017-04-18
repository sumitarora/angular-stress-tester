import { Component, OnInit } from '@angular/core';
import { Service934Service } from '../../services/service-934.service';

@Component({
  selector: 'app-comp-934',
  templateUrl: './comp-934.component.html',
  styleUrls: ['./comp-934.component.css']
})
export class Comp934Component implements OnInit {

  constructor(private _service: Service934Service) { }

  ngOnInit() {
  }

}
