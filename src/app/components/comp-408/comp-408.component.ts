import { Component, OnInit } from '@angular/core';
import { Service408Service } from '../../services/service-408.service';

@Component({
  selector: 'app-comp-408',
  templateUrl: './comp-408.component.html',
  styleUrls: ['./comp-408.component.css']
})
export class Comp408Component implements OnInit {

  constructor(private _service: Service408Service) { }

  ngOnInit() {
  }

}
