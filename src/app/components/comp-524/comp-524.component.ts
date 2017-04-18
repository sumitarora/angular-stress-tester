import { Component, OnInit } from '@angular/core';
import { Service524Service } from '../../services/service-524.service';

@Component({
  selector: 'app-comp-524',
  templateUrl: './comp-524.component.html',
  styleUrls: ['./comp-524.component.css']
})
export class Comp524Component implements OnInit {

  constructor(private _service: Service524Service) { }

  ngOnInit() {
  }

}
