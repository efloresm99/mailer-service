import { Injectable } from '@nestjs/common';
import { validate } from 'class-validator';
import * as NodeMailer from 'nodemailer';
import SMTPTransport from 'nodemailer';

import { PayloadValidatorDto, SendMailDto } from './dtos';

@Injectable()
export class EmailService {
  private mailerTransport: NodeMailer.Transporter<SMTPTransport.SentMessageInfo>;

  constructor() {
    this.mailerTransport = NodeMailer.createTransport({
      host: process.env.SMTP_HOST,
      port: +process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendMail(payload: SendMailDto): Promise<void> {
    const mail = new PayloadValidatorDto();
    Object.assign(mail, payload);
    validate(mail).then((errors) => {
      if (!errors.length) {
        this.mailerTransport.sendMail(mail);
      }
    });
  }
}
