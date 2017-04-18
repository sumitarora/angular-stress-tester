import { Component, OnInit } from '@angular/core';
import { Service86Service } from '../../services/service-86.service';

@Component({
  selector: 'app-comp-86',
  templateUrl: './comp-86.component.html',
  styleUrls: ['./comp-86.component.css']
})
export class Comp86Component implements OnInit {

  constructor(private _service: Service86Service) { }

  ngOnInit() {
  }

}
