import { Component, OnInit } from '@angular/core';
import { Service950Service } from '../../services/service-950.service';

@Component({
  selector: 'app-comp-950',
  templateUrl: './comp-950.component.html',
  styleUrls: ['./comp-950.component.css']
})
export class Comp950Component implements OnInit {

  constructor(private _service: Service950Service) { }

  ngOnInit() {
  }

}
