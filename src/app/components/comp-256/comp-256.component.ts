import { Component, OnInit } from '@angular/core';
import { Service256Service } from '../../services/service-256.service';

@Component({
  selector: 'app-comp-256',
  templateUrl: './comp-256.component.html',
  styleUrls: ['./comp-256.component.css']
})
export class Comp256Component implements OnInit {

  constructor(private _service: Service256Service) { }

  ngOnInit() {
  }

}
