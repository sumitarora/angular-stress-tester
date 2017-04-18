import { Component, OnInit } from '@angular/core';
import { Service147Service } from '../../services/service-147.service';

@Component({
  selector: 'app-comp-147',
  templateUrl: './comp-147.component.html',
  styleUrls: ['./comp-147.component.css']
})
export class Comp147Component implements OnInit {

  constructor(private _service: Service147Service) { }

  ngOnInit() {
  }

}
