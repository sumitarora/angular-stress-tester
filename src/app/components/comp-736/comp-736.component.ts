import { Component, OnInit } from '@angular/core';
import { Service736Service } from '../../services/service-736.service';

@Component({
  selector: 'app-comp-736',
  templateUrl: './comp-736.component.html',
  styleUrls: ['./comp-736.component.css']
})
export class Comp736Component implements OnInit {

  constructor(private _service: Service736Service) { }

  ngOnInit() {
  }

}
