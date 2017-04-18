import { Component, OnInit } from '@angular/core';
import { Service14Service } from '../../services/service-14.service';

@Component({
  selector: 'app-comp-14',
  templateUrl: './comp-14.component.html',
  styleUrls: ['./comp-14.component.css']
})
export class Comp14Component implements OnInit {

  constructor(private _service: Service14Service) { }

  ngOnInit() {
  }

}
