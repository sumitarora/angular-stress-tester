import { Component, OnInit } from '@angular/core';
import { Service780Service } from '../../services/service-780.service';

@Component({
  selector: 'app-comp-780',
  templateUrl: './comp-780.component.html',
  styleUrls: ['./comp-780.component.css']
})
export class Comp780Component implements OnInit {

  constructor(private _service: Service780Service) { }

  ngOnInit() {
  }

}
