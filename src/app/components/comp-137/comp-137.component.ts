import { Component, OnInit } from '@angular/core';
import { Service137Service } from '../../services/service-137.service';

@Component({
  selector: 'app-comp-137',
  templateUrl: './comp-137.component.html',
  styleUrls: ['./comp-137.component.css']
})
export class Comp137Component implements OnInit {

  constructor(private _service: Service137Service) { }

  ngOnInit() {
  }

}
