import { Component, OnInit } from '@angular/core';
import { Service431Service } from '../../services/service-431.service';

@Component({
  selector: 'app-comp-431',
  templateUrl: './comp-431.component.html',
  styleUrls: ['./comp-431.component.css']
})
export class Comp431Component implements OnInit {

  constructor(private _service: Service431Service) { }

  ngOnInit() {
  }

}
