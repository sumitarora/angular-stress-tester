import { Component, OnInit } from '@angular/core';
import { Service102Service } from '../../services/service-102.service';

@Component({
  selector: 'app-comp-102',
  templateUrl: './comp-102.component.html',
  styleUrls: ['./comp-102.component.css']
})
export class Comp102Component implements OnInit {

  constructor(private _service: Service102Service) { }

  ngOnInit() {
  }

}
