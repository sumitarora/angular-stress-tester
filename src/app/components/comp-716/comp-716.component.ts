import { Component, OnInit } from '@angular/core';
import { Service716Service } from '../../services/service-716.service';

@Component({
  selector: 'app-comp-716',
  templateUrl: './comp-716.component.html',
  styleUrls: ['./comp-716.component.css']
})
export class Comp716Component implements OnInit {

  constructor(private _service: Service716Service) { }

  ngOnInit() {
  }

}
