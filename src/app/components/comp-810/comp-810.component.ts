import { Component, OnInit } from '@angular/core';
import { Service810Service } from '../../services/service-810.service';

@Component({
  selector: 'app-comp-810',
  templateUrl: './comp-810.component.html',
  styleUrls: ['./comp-810.component.css']
})
export class Comp810Component implements OnInit {

  constructor(private _service: Service810Service) { }

  ngOnInit() {
  }

}
