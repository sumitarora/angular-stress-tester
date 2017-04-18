import { Component, OnInit } from '@angular/core';
import { Service361Service } from '../../services/service-361.service';

@Component({
  selector: 'app-comp-361',
  templateUrl: './comp-361.component.html',
  styleUrls: ['./comp-361.component.css']
})
export class Comp361Component implements OnInit {

  constructor(private _service: Service361Service) { }

  ngOnInit() {
  }

}
