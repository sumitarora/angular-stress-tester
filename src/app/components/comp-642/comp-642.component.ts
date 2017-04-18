import { Component, OnInit } from '@angular/core';
import { Service642Service } from '../../services/service-642.service';

@Component({
  selector: 'app-comp-642',
  templateUrl: './comp-642.component.html',
  styleUrls: ['./comp-642.component.css']
})
export class Comp642Component implements OnInit {

  constructor(private _service: Service642Service) { }

  ngOnInit() {
  }

}
