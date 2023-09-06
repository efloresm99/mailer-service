import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { EmailService } from './email.service';
import { SendMailDto } from './dtos';

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @EventPattern('send_email')
  async sendVerificationEmail(@Payload() data: SendMailDto) {
    this.emailService.sendMail(data);
  }
}
