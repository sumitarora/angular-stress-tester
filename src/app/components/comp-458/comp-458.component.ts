import { Component, OnInit } from '@angular/core';
import { Service458Service } from '../../services/service-458.service';

@Component({
  selector: 'app-comp-458',
  templateUrl: './comp-458.component.html',
  styleUrls: ['./comp-458.component.css']
})
export class Comp458Component implements OnInit {

  constructor(private _service: Service458Service) { }

  ngOnInit() {
  }

}
