import { Component, OnInit } from '@angular/core';
import { Service249Service } from '../../services/service-249.service';

@Component({
  selector: 'app-comp-249',
  templateUrl: './comp-249.component.html',
  styleUrls: ['./comp-249.component.css']
})
export class Comp249Component implements OnInit {

  constructor(private _service: Service249Service) { }

  ngOnInit() {
  }

}
