import { Component, OnInit } from '@angular/core';
import { Service638Service } from '../../services/service-638.service';

@Component({
  selector: 'app-comp-638',
  templateUrl: './comp-638.component.html',
  styleUrls: ['./comp-638.component.css']
})
export class Comp638Component implements OnInit {

  constructor(private _service: Service638Service) { }

  ngOnInit() {
  }

}
