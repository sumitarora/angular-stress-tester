import { Component, OnInit } from '@angular/core';
import { Service888Service } from '../../services/service-888.service';

@Component({
  selector: 'app-comp-888',
  templateUrl: './comp-888.component.html',
  styleUrls: ['./comp-888.component.css']
})
export class Comp888Component implements OnInit {

  constructor(private _service: Service888Service) { }

  ngOnInit() {
  }

}
