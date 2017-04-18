import { Component, OnInit } from '@angular/core';
import { Service816Service } from '../../services/service-816.service';

@Component({
  selector: 'app-comp-816',
  templateUrl: './comp-816.component.html',
  styleUrls: ['./comp-816.component.css']
})
export class Comp816Component implements OnInit {

  constructor(private _service: Service816Service) { }

  ngOnInit() {
  }

}
