import { Component, OnInit } from '@angular/core';
import { Service997Service } from '../../services/service-997.service';

@Component({
  selector: 'app-comp-997',
  templateUrl: './comp-997.component.html',
  styleUrls: ['./comp-997.component.css']
})
export class Comp997Component implements OnInit {

  constructor(private _service: Service997Service) { }

  ngOnInit() {
  }

}
