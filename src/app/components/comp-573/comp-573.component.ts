import { Component, OnInit } from '@angular/core';
import { Service573Service } from '../../services/service-573.service';

@Component({
  selector: 'app-comp-573',
  templateUrl: './comp-573.component.html',
  styleUrls: ['./comp-573.component.css']
})
export class Comp573Component implements OnInit {

  constructor(private _service: Service573Service) { }

  ngOnInit() {
  }

}
