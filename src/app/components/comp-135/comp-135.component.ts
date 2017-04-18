import { Component, OnInit } from '@angular/core';
import { Service135Service } from '../../services/service-135.service';

@Component({
  selector: 'app-comp-135',
  templateUrl: './comp-135.component.html',
  styleUrls: ['./comp-135.component.css']
})
export class Comp135Component implements OnInit {

  constructor(private _service: Service135Service) { }

  ngOnInit() {
  }

}
