import { Component, OnInit } from '@angular/core';
import { Service636Service } from '../../services/service-636.service';

@Component({
  selector: 'app-comp-636',
  templateUrl: './comp-636.component.html',
  styleUrls: ['./comp-636.component.css']
})
export class Comp636Component implements OnInit {

  constructor(private _service: Service636Service) { }

  ngOnInit() {
  }

}
