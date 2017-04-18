import { Component, OnInit } from '@angular/core';
import { Service271Service } from '../../services/service-271.service';

@Component({
  selector: 'app-comp-271',
  templateUrl: './comp-271.component.html',
  styleUrls: ['./comp-271.component.css']
})
export class Comp271Component implements OnInit {

  constructor(private _service: Service271Service) { }

  ngOnInit() {
  }

}
