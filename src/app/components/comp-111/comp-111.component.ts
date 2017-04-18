import { Component, OnInit } from '@angular/core';
import { Service111Service } from '../../services/service-111.service';

@Component({
  selector: 'app-comp-111',
  templateUrl: './comp-111.component.html',
  styleUrls: ['./comp-111.component.css']
})
export class Comp111Component implements OnInit {

  constructor(private _service: Service111Service) { }

  ngOnInit() {
  }

}
