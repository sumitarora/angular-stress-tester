import { Component, OnInit } from '@angular/core';
import { Service79Service } from '../../services/service-79.service';

@Component({
  selector: 'app-comp-79',
  templateUrl: './comp-79.component.html',
  styleUrls: ['./comp-79.component.css']
})
export class Comp79Component implements OnInit {

  constructor(private _service: Service79Service) { }

  ngOnInit() {
  }

}
