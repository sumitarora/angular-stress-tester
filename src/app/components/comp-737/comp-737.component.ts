import { Component, OnInit } from '@angular/core';
import { Service737Service } from '../../services/service-737.service';

@Component({
  selector: 'app-comp-737',
  templateUrl: './comp-737.component.html',
  styleUrls: ['./comp-737.component.css']
})
export class Comp737Component implements OnInit {

  constructor(private _service: Service737Service) { }

  ngOnInit() {
  }

}
