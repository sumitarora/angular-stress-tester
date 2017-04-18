import { Component, OnInit } from '@angular/core';
import { Service269Service } from '../../services/service-269.service';

@Component({
  selector: 'app-comp-269',
  templateUrl: './comp-269.component.html',
  styleUrls: ['./comp-269.component.css']
})
export class Comp269Component implements OnInit {

  constructor(private _service: Service269Service) { }

  ngOnInit() {
  }

}
