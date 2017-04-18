import { Component, OnInit } from '@angular/core';
import { Service467Service } from '../../services/service-467.service';

@Component({
  selector: 'app-comp-467',
  templateUrl: './comp-467.component.html',
  styleUrls: ['./comp-467.component.css']
})
export class Comp467Component implements OnInit {

  constructor(private _service: Service467Service) { }

  ngOnInit() {
  }

}
