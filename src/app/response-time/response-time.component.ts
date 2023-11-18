import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/models/response.model';
import { EmployeesService } from '../services/employees.service';
import { Cls } from '../models/cls.model';
import { DeviceDetectorService } from 'ngx-device-detector';
import { IpServiceService } from '../services/ip-service.service';


@Component({
  selector: 'app-response-time',
  templateUrl: './response-time.component.html',
  styleUrls: ['./response-time.component.css']
})

export class ResponseTimeComponent implements OnInit {

  public localIP: string = '';
  res: Response[] = [];
  temp: Cls[] = [];
  ipAddress: string = "";
  deviceInfo = null;
  constructor(private employeesService: EmployeesService, private ipserv: IpServiceService, private deviceService: DeviceDetectorService) {
    this.ipserv.getIp().subscribe((data: any) => {
      console.log(data)
      
    })
  }

  ngOnInit(): void {

   /* let currentUrl = document.location.protocol + "//" + document.location.hostname + ":" + document.location.port;
    console.log(currentUrl);*/

    this.getLocalIPs().then(ips => {
      ips.forEach(ip => this.ipAddress = ip
      
      );
      
    });


    this.epicFunction();
    this.employeesService.getResponse().subscribe({
      next: (data) => {
        var a = data;
        console.log(a);
        if (a.length > 0) {
          const result = a[0].Result
          //console.log(result)
        }
        //console.log(a[0].isSuccess.valueOf.toString);
        //this.temp = data[0].Result;
       // console.log(this.temp);
        //const d = this.temp[0].Result;
        //console.log(d);
        
       

      },
      error: (response) => {
        console.log(response);
      }
    });
  }

  async getLocalIPs() {
    return new Promise<string[]>(resolve => {
      const pc = new RTCPeerConnection();
      pc.createDataChannel('');
      pc.createOffer()
        .then(offer => pc.setLocalDescription(offer))
        .then(() => {
          pc.addEventListener('icecandidate', e => {
            console.log('E=', e);
           // const candidate = e.candidate.candidate;
            //console.log('Ec=', e.candidate.candidate.split(' ')[4]);
            if (!e.candidate) {
              resolve([]);
              return;
            }
            const candidate = e.candidate.candidate;
            const localIP = candidate.split(' ')[4];
            resolve([localIP]);
            pc.close();
          });
        });
    });
  }

  epicFunction() {
    console.log('hello `Home` component');
    
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceService.getDeviceInfo());
    console.log(this.deviceService.userAgent);
    console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
  }
}




