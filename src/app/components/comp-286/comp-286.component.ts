import { Component, OnInit } from '@angular/core';
import { Service286Service } from '../../services/service-286.service';

@Component({
  selector: 'app-comp-286',
  templateUrl: './comp-286.component.html',
  styleUrls: ['./comp-286.component.css']
})
export class Comp286Component implements OnInit {

  constructor(private _service: Service286Service) { }

  ngOnInit() {
  }

}
