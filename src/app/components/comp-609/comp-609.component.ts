import { Component, OnInit } from '@angular/core';
import { Service609Service } from '../../services/service-609.service';

@Component({
  selector: 'app-comp-609',
  templateUrl: './comp-609.component.html',
  styleUrls: ['./comp-609.component.css']
})
export class Comp609Component implements OnInit {

  constructor(private _service: Service609Service) { }

  ngOnInit() {
  }

}
