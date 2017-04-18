import { Component, OnInit } from '@angular/core';
import { Service967Service } from '../../services/service-967.service';

@Component({
  selector: 'app-comp-967',
  templateUrl: './comp-967.component.html',
  styleUrls: ['./comp-967.component.css']
})
export class Comp967Component implements OnInit {

  constructor(private _service: Service967Service) { }

  ngOnInit() {
  }

}
