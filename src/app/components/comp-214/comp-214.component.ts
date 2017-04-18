import { Component, OnInit } from '@angular/core';
import { Service214Service } from '../../services/service-214.service';

@Component({
  selector: 'app-comp-214',
  templateUrl: './comp-214.component.html',
  styleUrls: ['./comp-214.component.css']
})
export class Comp214Component implements OnInit {

  constructor(private _service: Service214Service) { }

  ngOnInit() {
  }

}
