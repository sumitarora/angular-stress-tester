import { Component, OnInit } from '@angular/core';
import { Service908Service } from '../../services/service-908.service';

@Component({
  selector: 'app-comp-908',
  templateUrl: './comp-908.component.html',
  styleUrls: ['./comp-908.component.css']
})
export class Comp908Component implements OnInit {

  constructor(private _service: Service908Service) { }

  ngOnInit() {
  }

}
