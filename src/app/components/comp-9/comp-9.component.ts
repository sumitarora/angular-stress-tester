import { Component, OnInit } from '@angular/core';
import { Service9Service } from '../../services/service-9.service';

@Component({
  selector: 'app-comp-9',
  templateUrl: './comp-9.component.html',
  styleUrls: ['./comp-9.component.css']
})
export class Comp9Component implements OnInit {

  constructor(private _service: Service9Service) { }

  ngOnInit() {
  }

}
