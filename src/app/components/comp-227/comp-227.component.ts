import { Component, OnInit } from '@angular/core';
import { Service227Service } from '../../services/service-227.service';

@Component({
  selector: 'app-comp-227',
  templateUrl: './comp-227.component.html',
  styleUrls: ['./comp-227.component.css']
})
export class Comp227Component implements OnInit {

  constructor(private _service: Service227Service) { }

  ngOnInit() {
  }

}
