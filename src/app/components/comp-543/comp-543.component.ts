import { Component, OnInit } from '@angular/core';
import { Service543Service } from '../../services/service-543.service';

@Component({
  selector: 'app-comp-543',
  templateUrl: './comp-543.component.html',
  styleUrls: ['./comp-543.component.css']
})
export class Comp543Component implements OnInit {

  constructor(private _service: Service543Service) { }

  ngOnInit() {
  }

}
