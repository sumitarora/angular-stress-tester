import { Component, OnInit } from '@angular/core';
import { Service62Service } from '../../services/service-62.service';

@Component({
  selector: 'app-comp-62',
  templateUrl: './comp-62.component.html',
  styleUrls: ['./comp-62.component.css']
})
export class Comp62Component implements OnInit {

  constructor(private _service: Service62Service) { }

  ngOnInit() {
  }

}
