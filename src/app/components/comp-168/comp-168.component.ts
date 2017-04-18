import { Component, OnInit } from '@angular/core';
import { Service168Service } from '../../services/service-168.service';

@Component({
  selector: 'app-comp-168',
  templateUrl: './comp-168.component.html',
  styleUrls: ['./comp-168.component.css']
})
export class Comp168Component implements OnInit {

  constructor(private _service: Service168Service) { }

  ngOnInit() {
  }

}
