import { Component, OnInit } from '@angular/core';
import { Service744Service } from '../../services/service-744.service';

@Component({
  selector: 'app-comp-744',
  templateUrl: './comp-744.component.html',
  styleUrls: ['./comp-744.component.css']
})
export class Comp744Component implements OnInit {

  constructor(private _service: Service744Service) { }

  ngOnInit() {
  }

}
