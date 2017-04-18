import { Component, OnInit } from '@angular/core';
import { Service101Service } from '../../services/service-101.service';

@Component({
  selector: 'app-comp-101',
  templateUrl: './comp-101.component.html',
  styleUrls: ['./comp-101.component.css']
})
export class Comp101Component implements OnInit {

  constructor(private _service: Service101Service) { }

  ngOnInit() {
  }

}
