import { Component, OnInit } from '@angular/core';
import { Service781Service } from '../../services/service-781.service';

@Component({
  selector: 'app-comp-781',
  templateUrl: './comp-781.component.html',
  styleUrls: ['./comp-781.component.css']
})
export class Comp781Component implements OnInit {

  constructor(private _service: Service781Service) { }

  ngOnInit() {
  }

}
