import { Component, OnInit } from '@angular/core';
import { Service11Service } from '../../services/service-11.service';

@Component({
  selector: 'app-comp-11',
  templateUrl: './comp-11.component.html',
  styleUrls: ['./comp-11.component.css']
})
export class Comp11Component implements OnInit {

  constructor(private _service: Service11Service) { }

  ngOnInit() {
  }

}
