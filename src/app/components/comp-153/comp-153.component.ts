import { Component, OnInit } from '@angular/core';
import { Service153Service } from '../../services/service-153.service';

@Component({
  selector: 'app-comp-153',
  templateUrl: './comp-153.component.html',
  styleUrls: ['./comp-153.component.css']
})
export class Comp153Component implements OnInit {

  constructor(private _service: Service153Service) { }

  ngOnInit() {
  }

}
