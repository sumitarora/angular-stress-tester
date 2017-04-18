import { Component, OnInit } from '@angular/core';
import { Service965Service } from '../../services/service-965.service';

@Component({
  selector: 'app-comp-965',
  templateUrl: './comp-965.component.html',
  styleUrls: ['./comp-965.component.css']
})
export class Comp965Component implements OnInit {

  constructor(private _service: Service965Service) { }

  ngOnInit() {
  }

}
