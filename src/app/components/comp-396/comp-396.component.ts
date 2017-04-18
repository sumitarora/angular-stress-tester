import { Component, OnInit } from '@angular/core';
import { Service396Service } from '../../services/service-396.service';

@Component({
  selector: 'app-comp-396',
  templateUrl: './comp-396.component.html',
  styleUrls: ['./comp-396.component.css']
})
export class Comp396Component implements OnInit {

  constructor(private _service: Service396Service) { }

  ngOnInit() {
  }

}
