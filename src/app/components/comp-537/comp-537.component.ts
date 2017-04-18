import { Component, OnInit } from '@angular/core';
import { Service537Service } from '../../services/service-537.service';

@Component({
  selector: 'app-comp-537',
  templateUrl: './comp-537.component.html',
  styleUrls: ['./comp-537.component.css']
})
export class Comp537Component implements OnInit {

  constructor(private _service: Service537Service) { }

  ngOnInit() {
  }

}
