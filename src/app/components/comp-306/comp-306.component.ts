import { Component, OnInit } from '@angular/core';
import { Service306Service } from '../../services/service-306.service';

@Component({
  selector: 'app-comp-306',
  templateUrl: './comp-306.component.html',
  styleUrls: ['./comp-306.component.css']
})
export class Comp306Component implements OnInit {

  constructor(private _service: Service306Service) { }

  ngOnInit() {
  }

}
