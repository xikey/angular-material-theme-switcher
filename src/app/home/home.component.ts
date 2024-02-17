import {Component, HostBinding} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardImage,
    MatCardActions,
    MatButton,
    MatFormField,
    MatInput,
    MatHint,
    MatLabel,
    MatCardSubtitle,
    MatSlideToggle,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @HostBinding('class')
  currentTheme: 'light-theme' | 'dark-theme' = 'light-theme';

  isDarkMode:boolean = false;

  onThemeChanged() {
    this.isDarkMode=!this.isDarkMode;
    console.log(this.isDarkMode);
    if(this.isDarkMode){
      this.currentTheme = 'dark-theme';
    }else {
      this.currentTheme = 'light-theme'
    }
  }
}
