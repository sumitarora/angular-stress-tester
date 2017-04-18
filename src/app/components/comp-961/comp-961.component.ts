import { Component, OnInit } from '@angular/core';
import { Service961Service } from '../../services/service-961.service';

@Component({
  selector: 'app-comp-961',
  templateUrl: './comp-961.component.html',
  styleUrls: ['./comp-961.component.css']
})
export class Comp961Component implements OnInit {

  constructor(private _service: Service961Service) { }

  ngOnInit() {
  }

}
