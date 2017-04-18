import { Component, OnInit } from '@angular/core';
import { Service375Service } from '../../services/service-375.service';

@Component({
  selector: 'app-comp-375',
  templateUrl: './comp-375.component.html',
  styleUrls: ['./comp-375.component.css']
})
export class Comp375Component implements OnInit {

  constructor(private _service: Service375Service) { }

  ngOnInit() {
  }

}
