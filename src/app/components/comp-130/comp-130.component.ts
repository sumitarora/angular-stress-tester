import { Component, OnInit } from '@angular/core';
import { Service130Service } from '../../services/service-130.service';

@Component({
  selector: 'app-comp-130',
  templateUrl: './comp-130.component.html',
  styleUrls: ['./comp-130.component.css']
})
export class Comp130Component implements OnInit {

  constructor(private _service: Service130Service) { }

  ngOnInit() {
  }

}
