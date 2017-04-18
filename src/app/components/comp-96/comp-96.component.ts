import { Component, OnInit } from '@angular/core';
import { Service96Service } from '../../services/service-96.service';

@Component({
  selector: 'app-comp-96',
  templateUrl: './comp-96.component.html',
  styleUrls: ['./comp-96.component.css']
})
export class Comp96Component implements OnInit {

  constructor(private _service: Service96Service) { }

  ngOnInit() {
  }

}
