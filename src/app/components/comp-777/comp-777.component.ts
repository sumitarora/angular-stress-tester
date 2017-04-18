import { Component, OnInit } from '@angular/core';
import { Service777Service } from '../../services/service-777.service';

@Component({
  selector: 'app-comp-777',
  templateUrl: './comp-777.component.html',
  styleUrls: ['./comp-777.component.css']
})
export class Comp777Component implements OnInit {

  constructor(private _service: Service777Service) { }

  ngOnInit() {
  }

}
