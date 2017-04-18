import { Component, OnInit } from '@angular/core';
import { Service511Service } from '../../services/service-511.service';

@Component({
  selector: 'app-comp-511',
  templateUrl: './comp-511.component.html',
  styleUrls: ['./comp-511.component.css']
})
export class Comp511Component implements OnInit {

  constructor(private _service: Service511Service) { }

  ngOnInit() {
  }

}
