import { Component, OnInit } from '@angular/core';
import { Service118Service } from '../../services/service-118.service';

@Component({
  selector: 'app-comp-118',
  templateUrl: './comp-118.component.html',
  styleUrls: ['./comp-118.component.css']
})
export class Comp118Component implements OnInit {

  constructor(private _service: Service118Service) { }

  ngOnInit() {
  }

}
