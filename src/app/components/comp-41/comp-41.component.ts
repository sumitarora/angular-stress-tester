import { Component, OnInit } from '@angular/core';
import { Service41Service } from '../../services/service-41.service';

@Component({
  selector: 'app-comp-41',
  templateUrl: './comp-41.component.html',
  styleUrls: ['./comp-41.component.css']
})
export class Comp41Component implements OnInit {

  constructor(private _service: Service41Service) { }

  ngOnInit() {
  }

}
