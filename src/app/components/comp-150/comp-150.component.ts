import { Component, OnInit } from '@angular/core';
import { Service150Service } from '../../services/service-150.service';

@Component({
  selector: 'app-comp-150',
  templateUrl: './comp-150.component.html',
  styleUrls: ['./comp-150.component.css']
})
export class Comp150Component implements OnInit {

  constructor(private _service: Service150Service) { }

  ngOnInit() {
  }

}
