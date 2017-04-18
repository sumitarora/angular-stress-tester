import { Component, OnInit } from '@angular/core';
import { Service630Service } from '../../services/service-630.service';

@Component({
  selector: 'app-comp-630',
  templateUrl: './comp-630.component.html',
  styleUrls: ['./comp-630.component.css']
})
export class Comp630Component implements OnInit {

  constructor(private _service: Service630Service) { }

  ngOnInit() {
  }

}
