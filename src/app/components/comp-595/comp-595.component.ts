import { Component, OnInit } from '@angular/core';
import { Service595Service } from '../../services/service-595.service';

@Component({
  selector: 'app-comp-595',
  templateUrl: './comp-595.component.html',
  styleUrls: ['./comp-595.component.css']
})
export class Comp595Component implements OnInit {

  constructor(private _service: Service595Service) { }

  ngOnInit() {
  }

}
