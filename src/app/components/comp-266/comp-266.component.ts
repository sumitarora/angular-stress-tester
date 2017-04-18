import { Component, OnInit } from '@angular/core';
import { Service266Service } from '../../services/service-266.service';

@Component({
  selector: 'app-comp-266',
  templateUrl: './comp-266.component.html',
  styleUrls: ['./comp-266.component.css']
})
export class Comp266Component implements OnInit {

  constructor(private _service: Service266Service) { }

  ngOnInit() {
  }

}
