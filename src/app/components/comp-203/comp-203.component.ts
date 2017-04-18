import { Component, OnInit } from '@angular/core';
import { Service203Service } from '../../services/service-203.service';

@Component({
  selector: 'app-comp-203',
  templateUrl: './comp-203.component.html',
  styleUrls: ['./comp-203.component.css']
})
export class Comp203Component implements OnInit {

  constructor(private _service: Service203Service) { }

  ngOnInit() {
  }

}
