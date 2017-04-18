import { Component, OnInit } from '@angular/core';
import { Service931Service } from '../../services/service-931.service';

@Component({
  selector: 'app-comp-931',
  templateUrl: './comp-931.component.html',
  styleUrls: ['./comp-931.component.css']
})
export class Comp931Component implements OnInit {

  constructor(private _service: Service931Service) { }

  ngOnInit() {
  }

}
