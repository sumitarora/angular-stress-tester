import { Component, OnInit } from '@angular/core';
import { Service768Service } from '../../services/service-768.service';

@Component({
  selector: 'app-comp-768',
  templateUrl: './comp-768.component.html',
  styleUrls: ['./comp-768.component.css']
})
export class Comp768Component implements OnInit {

  constructor(private _service: Service768Service) { }

  ngOnInit() {
  }

}
