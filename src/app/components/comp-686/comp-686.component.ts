import { Component, OnInit } from '@angular/core';
import { Service686Service } from '../../services/service-686.service';

@Component({
  selector: 'app-comp-686',
  templateUrl: './comp-686.component.html',
  styleUrls: ['./comp-686.component.css']
})
export class Comp686Component implements OnInit {

  constructor(private _service: Service686Service) { }

  ngOnInit() {
  }

}
