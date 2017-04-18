import { Component, OnInit } from '@angular/core';
import { Service527Service } from '../../services/service-527.service';

@Component({
  selector: 'app-comp-527',
  templateUrl: './comp-527.component.html',
  styleUrls: ['./comp-527.component.css']
})
export class Comp527Component implements OnInit {

  constructor(private _service: Service527Service) { }

  ngOnInit() {
  }

}
