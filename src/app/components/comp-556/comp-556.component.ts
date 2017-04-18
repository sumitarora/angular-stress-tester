import { Component, OnInit } from '@angular/core';
import { Service556Service } from '../../services/service-556.service';

@Component({
  selector: 'app-comp-556',
  templateUrl: './comp-556.component.html',
  styleUrls: ['./comp-556.component.css']
})
export class Comp556Component implements OnInit {

  constructor(private _service: Service556Service) { }

  ngOnInit() {
  }

}
