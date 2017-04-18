import { Component, OnInit } from '@angular/core';
import { Service490Service } from '../../services/service-490.service';

@Component({
  selector: 'app-comp-490',
  templateUrl: './comp-490.component.html',
  styleUrls: ['./comp-490.component.css']
})
export class Comp490Component implements OnInit {

  constructor(private _service: Service490Service) { }

  ngOnInit() {
  }

}
