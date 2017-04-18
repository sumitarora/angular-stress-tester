import { Component, OnInit } from '@angular/core';
import { Service671Service } from '../../services/service-671.service';

@Component({
  selector: 'app-comp-671',
  templateUrl: './comp-671.component.html',
  styleUrls: ['./comp-671.component.css']
})
export class Comp671Component implements OnInit {

  constructor(private _service: Service671Service) { }

  ngOnInit() {
  }

}
