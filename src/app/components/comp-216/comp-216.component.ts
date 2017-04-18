import { Component, OnInit } from '@angular/core';
import { Service216Service } from '../../services/service-216.service';

@Component({
  selector: 'app-comp-216',
  templateUrl: './comp-216.component.html',
  styleUrls: ['./comp-216.component.css']
})
export class Comp216Component implements OnInit {

  constructor(private _service: Service216Service) { }

  ngOnInit() {
  }

}
