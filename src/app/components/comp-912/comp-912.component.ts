import { Component, OnInit } from '@angular/core';
import { Service912Service } from '../../services/service-912.service';

@Component({
  selector: 'app-comp-912',
  templateUrl: './comp-912.component.html',
  styleUrls: ['./comp-912.component.css']
})
export class Comp912Component implements OnInit {

  constructor(private _service: Service912Service) { }

  ngOnInit() {
  }

}
