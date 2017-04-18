import { Component, OnInit } from '@angular/core';
import { Service61Service } from '../../services/service-61.service';

@Component({
  selector: 'app-comp-61',
  templateUrl: './comp-61.component.html',
  styleUrls: ['./comp-61.component.css']
})
export class Comp61Component implements OnInit {

  constructor(private _service: Service61Service) { }

  ngOnInit() {
  }

}
