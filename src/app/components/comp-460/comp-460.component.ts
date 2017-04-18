import { Component, OnInit } from '@angular/core';
import { Service460Service } from '../../services/service-460.service';

@Component({
  selector: 'app-comp-460',
  templateUrl: './comp-460.component.html',
  styleUrls: ['./comp-460.component.css']
})
export class Comp460Component implements OnInit {

  constructor(private _service: Service460Service) { }

  ngOnInit() {
  }

}
