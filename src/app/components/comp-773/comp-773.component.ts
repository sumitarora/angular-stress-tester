import { Component, OnInit } from '@angular/core';
import { Service773Service } from '../../services/service-773.service';

@Component({
  selector: 'app-comp-773',
  templateUrl: './comp-773.component.html',
  styleUrls: ['./comp-773.component.css']
})
export class Comp773Component implements OnInit {

  constructor(private _service: Service773Service) { }

  ngOnInit() {
  }

}
