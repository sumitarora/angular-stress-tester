import { Component, OnInit } from '@angular/core';
import { Service575Service } from '../../services/service-575.service';

@Component({
  selector: 'app-comp-575',
  templateUrl: './comp-575.component.html',
  styleUrls: ['./comp-575.component.css']
})
export class Comp575Component implements OnInit {

  constructor(private _service: Service575Service) { }

  ngOnInit() {
  }

}
