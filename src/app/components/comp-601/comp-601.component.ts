import { Component, OnInit } from '@angular/core';
import { Service601Service } from '../../services/service-601.service';

@Component({
  selector: 'app-comp-601',
  templateUrl: './comp-601.component.html',
  styleUrls: ['./comp-601.component.css']
})
export class Comp601Component implements OnInit {

  constructor(private _service: Service601Service) { }

  ngOnInit() {
  }

}
