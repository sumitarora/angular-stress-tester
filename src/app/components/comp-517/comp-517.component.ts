import { Component, OnInit } from '@angular/core';
import { Service517Service } from '../../services/service-517.service';

@Component({
  selector: 'app-comp-517',
  templateUrl: './comp-517.component.html',
  styleUrls: ['./comp-517.component.css']
})
export class Comp517Component implements OnInit {

  constructor(private _service: Service517Service) { }

  ngOnInit() {
  }

}
