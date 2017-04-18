import { Component, OnInit } from '@angular/core';
import { Service106Service } from '../../services/service-106.service';

@Component({
  selector: 'app-comp-106',
  templateUrl: './comp-106.component.html',
  styleUrls: ['./comp-106.component.css']
})
export class Comp106Component implements OnInit {

  constructor(private _service: Service106Service) { }

  ngOnInit() {
  }

}
