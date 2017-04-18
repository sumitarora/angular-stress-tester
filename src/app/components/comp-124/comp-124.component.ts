import { Component, OnInit } from '@angular/core';
import { Service124Service } from '../../services/service-124.service';

@Component({
  selector: 'app-comp-124',
  templateUrl: './comp-124.component.html',
  styleUrls: ['./comp-124.component.css']
})
export class Comp124Component implements OnInit {

  constructor(private _service: Service124Service) { }

  ngOnInit() {
  }

}
