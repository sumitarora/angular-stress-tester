import { Component, OnInit } from '@angular/core';
import { Service26Service } from '../../services/service-26.service';

@Component({
  selector: 'app-comp-26',
  templateUrl: './comp-26.component.html',
  styleUrls: ['./comp-26.component.css']
})
export class Comp26Component implements OnInit {

  constructor(private _service: Service26Service) { }

  ngOnInit() {
  }

}
