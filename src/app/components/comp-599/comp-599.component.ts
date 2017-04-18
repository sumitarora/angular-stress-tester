import { Component, OnInit } from '@angular/core';
import { Service599Service } from '../../services/service-599.service';

@Component({
  selector: 'app-comp-599',
  templateUrl: './comp-599.component.html',
  styleUrls: ['./comp-599.component.css']
})
export class Comp599Component implements OnInit {

  constructor(private _service: Service599Service) { }

  ngOnInit() {
  }

}
