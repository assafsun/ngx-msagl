import { Component } from '@angular/core';
import { LocalizationService } from 'src/app/shared/localization/services/localization.service';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.less']
})
export class AppBarComponent {
  public title: string;

  constructor(private localizationService: LocalizationService) {
    this.title = this.localizationService.get("NGX-MSAGL");
  }
}
