import { Component, OnInit } from '@angular/core';
import { Service282Service } from '../../services/service-282.service';

@Component({
  selector: 'app-comp-282',
  templateUrl: './comp-282.component.html',
  styleUrls: ['./comp-282.component.css']
})
export class Comp282Component implements OnInit {

  constructor(private _service: Service282Service) { }

  ngOnInit() {
  }

}
