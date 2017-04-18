import { Component, OnInit } from '@angular/core';
import { Service94Service } from '../../services/service-94.service';

@Component({
  selector: 'app-comp-94',
  templateUrl: './comp-94.component.html',
  styleUrls: ['./comp-94.component.css']
})
export class Comp94Component implements OnInit {

  constructor(private _service: Service94Service) { }

  ngOnInit() {
  }

}
