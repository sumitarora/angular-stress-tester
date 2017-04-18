import { Component, OnInit } from '@angular/core';
import { Service689Service } from '../../services/service-689.service';

@Component({
  selector: 'app-comp-689',
  templateUrl: './comp-689.component.html',
  styleUrls: ['./comp-689.component.css']
})
export class Comp689Component implements OnInit {

  constructor(private _service: Service689Service) { }

  ngOnInit() {
  }

}
