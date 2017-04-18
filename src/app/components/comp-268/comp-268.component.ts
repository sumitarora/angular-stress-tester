import { Component, OnInit } from '@angular/core';
import { Service268Service } from '../../services/service-268.service';

@Component({
  selector: 'app-comp-268',
  templateUrl: './comp-268.component.html',
  styleUrls: ['./comp-268.component.css']
})
export class Comp268Component implements OnInit {

  constructor(private _service: Service268Service) { }

  ngOnInit() {
  }

}
