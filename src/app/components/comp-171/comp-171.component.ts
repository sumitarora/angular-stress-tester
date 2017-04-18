import { Component, OnInit } from '@angular/core';
import { Service171Service } from '../../services/service-171.service';

@Component({
  selector: 'app-comp-171',
  templateUrl: './comp-171.component.html',
  styleUrls: ['./comp-171.component.css']
})
export class Comp171Component implements OnInit {

  constructor(private _service: Service171Service) { }

  ngOnInit() {
  }

}
