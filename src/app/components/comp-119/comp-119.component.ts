import { Component, OnInit } from '@angular/core';
import { Service119Service } from '../../services/service-119.service';

@Component({
  selector: 'app-comp-119',
  templateUrl: './comp-119.component.html',
  styleUrls: ['./comp-119.component.css']
})
export class Comp119Component implements OnInit {

  constructor(private _service: Service119Service) { }

  ngOnInit() {
  }

}
