import { Component, OnInit } from '@angular/core';
import { Service866Service } from '../../services/service-866.service';

@Component({
  selector: 'app-comp-866',
  templateUrl: './comp-866.component.html',
  styleUrls: ['./comp-866.component.css']
})
export class Comp866Component implements OnInit {

  constructor(private _service: Service866Service) { }

  ngOnInit() {
  }

}
