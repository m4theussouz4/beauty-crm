import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  darkMode = false;

  constructor() {}

  changeTheme() {
    this.darkMode ? this.removeStyle() : this.setStyle('assets/themes/dark.css');
  }

  setStyle(href: string) {
    this.darkMode = true;
    this.createLinkElementWithKey().setAttribute('href', href);
  }

  removeStyle() {
    this.darkMode = false;
    const existingLinkElement = this.getExistingLinkElementByKey();
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }

  getExistingLinkElementByKey() {
    return document.head.querySelector(
      'link[rel="stylesheet"].style-manager-theme'
    );
  }
  
  createLinkElementWithKey() {
    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.classList.add('style-manager-theme');
    document.head.appendChild(linkEl);
    return linkEl;
  }

}