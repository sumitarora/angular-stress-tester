import { Component, OnInit } from '@angular/core';
import { Service340Service } from '../../services/service-340.service';

@Component({
  selector: 'app-comp-340',
  templateUrl: './comp-340.component.html',
  styleUrls: ['./comp-340.component.css']
})
export class Comp340Component implements OnInit {

  constructor(private _service: Service340Service) { }

  ngOnInit() {
  }

}
