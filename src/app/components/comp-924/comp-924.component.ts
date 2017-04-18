import { Component, OnInit } from '@angular/core';
import { Service924Service } from '../../services/service-924.service';

@Component({
  selector: 'app-comp-924',
  templateUrl: './comp-924.component.html',
  styleUrls: ['./comp-924.component.css']
})
export class Comp924Component implements OnInit {

  constructor(private _service: Service924Service) { }

  ngOnInit() {
  }

}
