import { Component, OnInit } from '@angular/core';
import { Service855Service } from '../../services/service-855.service';

@Component({
  selector: 'app-comp-855',
  templateUrl: './comp-855.component.html',
  styleUrls: ['./comp-855.component.css']
})
export class Comp855Component implements OnInit {

  constructor(private _service: Service855Service) { }

  ngOnInit() {
  }

}
