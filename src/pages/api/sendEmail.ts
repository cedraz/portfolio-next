'use server';

import type { NextApiRequest, NextApiResponse } from 'next';
import { renderToString } from 'react-dom/server';
import * as React from 'react';
import nodemailer from 'nodemailer';
import { EmailTemplate } from '@/utils/email/email-template';

type SendEmailRequestBody = {
  name: string;
  email: string;
  category: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { name, email, category, message } = req.body as SendEmailRequestBody;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `${process.env.EMAIL_USER}`,
      to: `${email}`,
      subject: 'Email from the portfolio',
      html: renderToString(
        EmailTemplate({
          name: name,
          email: email,
          category: category,
          message: message,
        }) as React.ReactElement,
      ),
    };

    try {
      await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            reject(error);
          } else {
            resolve(info);
          }
        });
      });
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
