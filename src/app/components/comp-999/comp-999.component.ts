import { Component, OnInit } from '@angular/core';
import { Service999Service } from '../../services/service-999.service';

@Component({
  selector: 'app-comp-999',
  templateUrl: './comp-999.component.html',
  styleUrls: ['./comp-999.component.css']
})
export class Comp999Component implements OnInit {

  constructor(private _service: Service999Service) { }

  ngOnInit() {
  }

}
