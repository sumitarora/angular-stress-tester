import { Component, OnInit } from '@angular/core';
import { Service210Service } from '../../services/service-210.service';

@Component({
  selector: 'app-comp-210',
  templateUrl: './comp-210.component.html',
  styleUrls: ['./comp-210.component.css']
})
export class Comp210Component implements OnInit {

  constructor(private _service: Service210Service) { }

  ngOnInit() {
  }

}
