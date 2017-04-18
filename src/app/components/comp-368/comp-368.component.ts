import { Component, OnInit } from '@angular/core';
import { Service368Service } from '../../services/service-368.service';

@Component({
  selector: 'app-comp-368',
  templateUrl: './comp-368.component.html',
  styleUrls: ['./comp-368.component.css']
})
export class Comp368Component implements OnInit {

  constructor(private _service: Service368Service) { }

  ngOnInit() {
  }

}
