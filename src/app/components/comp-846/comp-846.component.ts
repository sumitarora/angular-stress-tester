import { Component, OnInit } from '@angular/core';
import { Service846Service } from '../../services/service-846.service';

@Component({
  selector: 'app-comp-846',
  templateUrl: './comp-846.component.html',
  styleUrls: ['./comp-846.component.css']
})
export class Comp846Component implements OnInit {

  constructor(private _service: Service846Service) { }

  ngOnInit() {
  }

}
