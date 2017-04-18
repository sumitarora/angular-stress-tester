import { Component, OnInit } from '@angular/core';
import { Service285Service } from '../../services/service-285.service';

@Component({
  selector: 'app-comp-285',
  templateUrl: './comp-285.component.html',
  styleUrls: ['./comp-285.component.css']
})
export class Comp285Component implements OnInit {

  constructor(private _service: Service285Service) { }

  ngOnInit() {
  }

}
