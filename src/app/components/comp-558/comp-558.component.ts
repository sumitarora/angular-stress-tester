import { Component, OnInit } from '@angular/core';
import { Service558Service } from '../../services/service-558.service';

@Component({
  selector: 'app-comp-558',
  templateUrl: './comp-558.component.html',
  styleUrls: ['./comp-558.component.css']
})
export class Comp558Component implements OnInit {

  constructor(private _service: Service558Service) { }

  ngOnInit() {
  }

}
