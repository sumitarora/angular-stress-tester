import { Component, OnInit } from '@angular/core';
import { Service43Service } from '../../services/service-43.service';

@Component({
  selector: 'app-comp-43',
  templateUrl: './comp-43.component.html',
  styleUrls: ['./comp-43.component.css']
})
export class Comp43Component implements OnInit {

  constructor(private _service: Service43Service) { }

  ngOnInit() {
  }

}
