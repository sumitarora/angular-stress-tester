import { Component, OnInit } from '@angular/core';
import { Service53Service } from '../../services/service-53.service';

@Component({
  selector: 'app-comp-53',
  templateUrl: './comp-53.component.html',
  styleUrls: ['./comp-53.component.css']
})
export class Comp53Component implements OnInit {

  constructor(private _service: Service53Service) { }

  ngOnInit() {
  }

}
