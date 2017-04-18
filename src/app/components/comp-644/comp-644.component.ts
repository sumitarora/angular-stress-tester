import { Component, OnInit } from '@angular/core';
import { Service644Service } from '../../services/service-644.service';

@Component({
  selector: 'app-comp-644',
  templateUrl: './comp-644.component.html',
  styleUrls: ['./comp-644.component.css']
})
export class Comp644Component implements OnInit {

  constructor(private _service: Service644Service) { }

  ngOnInit() {
  }

}
