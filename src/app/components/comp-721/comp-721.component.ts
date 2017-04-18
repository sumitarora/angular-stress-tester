import { Component, OnInit } from '@angular/core';
import { Service721Service } from '../../services/service-721.service';

@Component({
  selector: 'app-comp-721',
  templateUrl: './comp-721.component.html',
  styleUrls: ['./comp-721.component.css']
})
export class Comp721Component implements OnInit {

  constructor(private _service: Service721Service) { }

  ngOnInit() {
  }

}
