import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { EmailService } from '../service/email.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  release: Subscription;

  constructor(
    private fb: FormBuilder,
    private service: EmailService
  ) { }

  ngOnInit() {
  this.contactForm = this.fb.group({
    userName: ['', Validators.required],
    userEmail: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });
  }

  onSubmit(){
    console.log(this.contactForm.value);
    const obj = {
      To: this.contactForm.value.userEmail,
      // Name: this.contactForm.value.userName,
      Subject: this.contactForm.value.subject,
      Body: this.contactForm.value.message,
    };
    console.log('Object: ', obj);
    this.release = this.service.contactUs(obj).subscribe((data) => {
      console.log('Subscribe Response: ', data);
    });
    this.contactForm.reset();
  }

  ngOnDestroy(): void {
    this.release.unsubscribe();
  }

}
