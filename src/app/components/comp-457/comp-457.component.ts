import { Component, OnInit } from '@angular/core';
import { Service457Service } from '../../services/service-457.service';

@Component({
  selector: 'app-comp-457',
  templateUrl: './comp-457.component.html',
  styleUrls: ['./comp-457.component.css']
})
export class Comp457Component implements OnInit {

  constructor(private _service: Service457Service) { }

  ngOnInit() {
  }

}
