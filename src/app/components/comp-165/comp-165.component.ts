import { Component, OnInit } from '@angular/core';
import { Service165Service } from '../../services/service-165.service';

@Component({
  selector: 'app-comp-165',
  templateUrl: './comp-165.component.html',
  styleUrls: ['./comp-165.component.css']
})
export class Comp165Component implements OnInit {

  constructor(private _service: Service165Service) { }

  ngOnInit() {
  }

}
