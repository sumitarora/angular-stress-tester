import { Component, OnInit } from '@angular/core';
import { Service984Service } from '../../services/service-984.service';

@Component({
  selector: 'app-comp-984',
  templateUrl: './comp-984.component.html',
  styleUrls: ['./comp-984.component.css']
})
export class Comp984Component implements OnInit {

  constructor(private _service: Service984Service) { }

  ngOnInit() {
  }

}
