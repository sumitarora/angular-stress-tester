import { Component, OnInit } from '@angular/core';
import { Service72Service } from '../../services/service-72.service';

@Component({
  selector: 'app-comp-72',
  templateUrl: './comp-72.component.html',
  styleUrls: ['./comp-72.component.css']
})
export class Comp72Component implements OnInit {

  constructor(private _service: Service72Service) { }

  ngOnInit() {
  }

}
