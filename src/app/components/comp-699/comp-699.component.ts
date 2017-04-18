import { Component, OnInit } from '@angular/core';
import { Service699Service } from '../../services/service-699.service';

@Component({
  selector: 'app-comp-699',
  templateUrl: './comp-699.component.html',
  styleUrls: ['./comp-699.component.css']
})
export class Comp699Component implements OnInit {

  constructor(private _service: Service699Service) { }

  ngOnInit() {
  }

}
