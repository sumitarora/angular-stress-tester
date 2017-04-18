import { Component, OnInit } from '@angular/core';
import { Service64Service } from '../../services/service-64.service';

@Component({
  selector: 'app-comp-64',
  templateUrl: './comp-64.component.html',
  styleUrls: ['./comp-64.component.css']
})
export class Comp64Component implements OnInit {

  constructor(private _service: Service64Service) { }

  ngOnInit() {
  }

}
