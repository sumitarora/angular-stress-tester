import { Component, OnInit } from '@angular/core';
import { Service383Service } from '../../services/service-383.service';

@Component({
  selector: 'app-comp-383',
  templateUrl: './comp-383.component.html',
  styleUrls: ['./comp-383.component.css']
})
export class Comp383Component implements OnInit {

  constructor(private _service: Service383Service) { }

  ngOnInit() {
  }

}
