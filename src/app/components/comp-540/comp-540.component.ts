import { Component, OnInit } from '@angular/core';
import { Service540Service } from '../../services/service-540.service';

@Component({
  selector: 'app-comp-540',
  templateUrl: './comp-540.component.html',
  styleUrls: ['./comp-540.component.css']
})
export class Comp540Component implements OnInit {

  constructor(private _service: Service540Service) { }

  ngOnInit() {
  }

}
