import { Component, OnInit } from '@angular/core';
import { Service386Service } from '../../services/service-386.service';

@Component({
  selector: 'app-comp-386',
  templateUrl: './comp-386.component.html',
  styleUrls: ['./comp-386.component.css']
})
export class Comp386Component implements OnInit {

  constructor(private _service: Service386Service) { }

  ngOnInit() {
  }

}
