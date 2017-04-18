import { Component, OnInit } from '@angular/core';
import { Service672Service } from '../../services/service-672.service';

@Component({
  selector: 'app-comp-672',
  templateUrl: './comp-672.component.html',
  styleUrls: ['./comp-672.component.css']
})
export class Comp672Component implements OnInit {

  constructor(private _service: Service672Service) { }

  ngOnInit() {
  }

}
