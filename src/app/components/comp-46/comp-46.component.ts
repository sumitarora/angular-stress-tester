import { Component, OnInit } from '@angular/core';
import { Service46Service } from '../../services/service-46.service';

@Component({
  selector: 'app-comp-46',
  templateUrl: './comp-46.component.html',
  styleUrls: ['./comp-46.component.css']
})
export class Comp46Component implements OnInit {

  constructor(private _service: Service46Service) { }

  ngOnInit() {
  }

}
