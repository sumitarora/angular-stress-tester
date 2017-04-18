import { Component, OnInit } from '@angular/core';
import { Service617Service } from '../../services/service-617.service';

@Component({
  selector: 'app-comp-617',
  templateUrl: './comp-617.component.html',
  styleUrls: ['./comp-617.component.css']
})
export class Comp617Component implements OnInit {

  constructor(private _service: Service617Service) { }

  ngOnInit() {
  }

}
