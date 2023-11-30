import { Component, ElementRef, ViewChild } from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent {
  public deviceId: string;
  private trigger: Subject<any> = new Subject();
  webcamImage: any;
  private nextWebcam: Subject<any> = new Subject();

  sysImage = '';

  ngOnInit() { }

  public getSnapshot(): void {
    this.trigger.next(void 0);
  }

  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage!.imageAsDataUrl;
    const dataUrl = this.sysImage.split(',')[1];

    console.info('got webcam image', dataUrl);
    localStorage.setItem("imgData", this.sysImage);
  }

  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }
}
