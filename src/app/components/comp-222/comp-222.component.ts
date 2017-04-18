import { Component, OnInit } from '@angular/core';
import { Service222Service } from '../../services/service-222.service';

@Component({
  selector: 'app-comp-222',
  templateUrl: './comp-222.component.html',
  styleUrls: ['./comp-222.component.css']
})
export class Comp222Component implements OnInit {

  constructor(private _service: Service222Service) { }

  ngOnInit() {
  }

}
