import { Component, OnInit } from '@angular/core';
import { Service927Service } from '../../services/service-927.service';

@Component({
  selector: 'app-comp-927',
  templateUrl: './comp-927.component.html',
  styleUrls: ['./comp-927.component.css']
})
export class Comp927Component implements OnInit {

  constructor(private _service: Service927Service) { }

  ngOnInit() {
  }

}
