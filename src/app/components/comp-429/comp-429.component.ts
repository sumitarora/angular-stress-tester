import { Component, OnInit } from '@angular/core';
import { Service429Service } from '../../services/service-429.service';

@Component({
  selector: 'app-comp-429',
  templateUrl: './comp-429.component.html',
  styleUrls: ['./comp-429.component.css']
})
export class Comp429Component implements OnInit {

  constructor(private _service: Service429Service) { }

  ngOnInit() {
  }

}
