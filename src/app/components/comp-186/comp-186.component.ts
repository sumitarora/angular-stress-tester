import { Component, OnInit } from '@angular/core';
import { Service186Service } from '../../services/service-186.service';

@Component({
  selector: 'app-comp-186',
  templateUrl: './comp-186.component.html',
  styleUrls: ['./comp-186.component.css']
})
export class Comp186Component implements OnInit {

  constructor(private _service: Service186Service) { }

  ngOnInit() {
  }

}
