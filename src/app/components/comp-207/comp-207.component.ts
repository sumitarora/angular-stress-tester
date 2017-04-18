import { Component, OnInit } from '@angular/core';
import { Service207Service } from '../../services/service-207.service';

@Component({
  selector: 'app-comp-207',
  templateUrl: './comp-207.component.html',
  styleUrls: ['./comp-207.component.css']
})
export class Comp207Component implements OnInit {

  constructor(private _service: Service207Service) { }

  ngOnInit() {
  }

}
