import { Component, OnInit } from '@angular/core';
import { Service302Service } from '../../services/service-302.service';

@Component({
  selector: 'app-comp-302',
  templateUrl: './comp-302.component.html',
  styleUrls: ['./comp-302.component.css']
})
export class Comp302Component implements OnInit {

  constructor(private _service: Service302Service) { }

  ngOnInit() {
  }

}
