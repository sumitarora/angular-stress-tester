import { Component, OnInit } from '@angular/core';
import { Service91Service } from '../../services/service-91.service';

@Component({
  selector: 'app-comp-91',
  templateUrl: './comp-91.component.html',
  styleUrls: ['./comp-91.component.css']
})
export class Comp91Component implements OnInit {

  constructor(private _service: Service91Service) { }

  ngOnInit() {
  }

}
