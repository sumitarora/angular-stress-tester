import { Component, OnInit } from '@angular/core';
import { Service322Service } from '../../services/service-322.service';

@Component({
  selector: 'app-comp-322',
  templateUrl: './comp-322.component.html',
  styleUrls: ['./comp-322.component.css']
})
export class Comp322Component implements OnInit {

  constructor(private _service: Service322Service) { }

  ngOnInit() {
  }

}
