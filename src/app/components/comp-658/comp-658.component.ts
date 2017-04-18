import { Component, OnInit } from '@angular/core';
import { Service658Service } from '../../services/service-658.service';

@Component({
  selector: 'app-comp-658',
  templateUrl: './comp-658.component.html',
  styleUrls: ['./comp-658.component.css']
})
export class Comp658Component implements OnInit {

  constructor(private _service: Service658Service) { }

  ngOnInit() {
  }

}
