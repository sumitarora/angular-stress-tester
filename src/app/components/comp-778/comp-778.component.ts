import { Component, OnInit } from '@angular/core';
import { Service778Service } from '../../services/service-778.service';

@Component({
  selector: 'app-comp-778',
  templateUrl: './comp-778.component.html',
  styleUrls: ['./comp-778.component.css']
})
export class Comp778Component implements OnInit {

  constructor(private _service: Service778Service) { }

  ngOnInit() {
  }

}
