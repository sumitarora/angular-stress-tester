import { Component, OnInit } from '@angular/core';
import { Service437Service } from '../../services/service-437.service';

@Component({
  selector: 'app-comp-437',
  templateUrl: './comp-437.component.html',
  styleUrls: ['./comp-437.component.css']
})
export class Comp437Component implements OnInit {

  constructor(private _service: Service437Service) { }

  ngOnInit() {
  }

}
