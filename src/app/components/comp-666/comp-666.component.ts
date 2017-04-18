import { Component, OnInit } from '@angular/core';
import { Service666Service } from '../../services/service-666.service';

@Component({
  selector: 'app-comp-666',
  templateUrl: './comp-666.component.html',
  styleUrls: ['./comp-666.component.css']
})
export class Comp666Component implements OnInit {

  constructor(private _service: Service666Service) { }

  ngOnInit() {
  }

}
