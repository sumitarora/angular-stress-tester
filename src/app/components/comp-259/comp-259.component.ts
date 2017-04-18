import { Component, OnInit } from '@angular/core';
import { Service259Service } from '../../services/service-259.service';

@Component({
  selector: 'app-comp-259',
  templateUrl: './comp-259.component.html',
  styleUrls: ['./comp-259.component.css']
})
export class Comp259Component implements OnInit {

  constructor(private _service: Service259Service) { }

  ngOnInit() {
  }

}
